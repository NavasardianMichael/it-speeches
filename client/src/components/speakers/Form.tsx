import { FC, MouseEventHandler, useEffect, useState } from 'react'
import { isRejected } from '@reduxjs/toolkit'
import { FileImageOutlined } from '@ant-design/icons'
import { Button, Form, FormProps, Image, Input, InputProps, Select, SelectProps } from 'antd'
import { DefaultOptionType } from 'antd/es/select'
import { selectEditableSpeaker, selectIsSpeakersPending } from '@store/speakers/selectors'
import { setEditableSpeakerId } from '@store/speakers/slice'
import { setSpeakerOptionsAsync } from '@store/speakers/thunks'
import { selectSpeeches } from '@store/speeches/selectors'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { STATE_SLICE_NAMES } from '@helpers/constants/store'
import { generateRandomAvatarForEntity } from '@helpers/utils/avatars'

export const SpeakerForm: FC = () => {
  const dispatch = useAppDispatch()
  const speeches = useAppSelector(selectSpeeches)
  const editableSpeaker = useAppSelector(selectEditableSpeaker)
  const isSpeakersPending = useAppSelector(selectIsSpeakersPending)
  const [editedSpeaker, setEditedSpeakerOptions] = useState(editableSpeaker)

  const speechOptions: DefaultOptionType[] = speeches.allIds.map((id) => ({
    value: id,
    label: speeches.byId[id].topic || 'Unknown Topic',
  }))

  const handleSpeechesSelect: SelectProps['onChange'] = (value) => {
    setEditedSpeakerOptions((prev) => ({
      ...prev,
      speechIds: value,
    }))
  }

  const onTextChange: InputProps['onChange'] = (e) => {
    setEditedSpeakerOptions((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const randomImageGeneratorClickHandler: MouseEventHandler<HTMLElement> = () => {
    setEditedSpeakerOptions((prev) => ({
      ...prev,
      image: generateRandomAvatarForEntity(STATE_SLICE_NAMES.speakers),
    }))
  }

  const submitSpeaker: FormProps['onFinish'] = async () => {
    const action = await dispatch(
      setSpeakerOptionsAsync({ speaker: editedSpeaker, oldSpeechIds: editableSpeaker.speechIds })
    )
    if (!isRejected(action)) dispatch(setEditableSpeakerId(''))
  }

  useEffect(() => {
    setEditedSpeakerOptions(editableSpeaker)
  }, [editableSpeaker])

  return (
    <Form
      layout="vertical"
      style={{ width: '100%', maxWidth: 400 }}
      disabled={isSpeakersPending}
      onFinish={submitSpeaker}
    >
      <Form.Item label="Full Name">
        <Input
          required
          placeholder="Enter Full Name"
          value={editedSpeaker.fullName}
          onChange={onTextChange}
          name="fullName"
        />
      </Form.Item>
      <Form.Item label="Position">
        <Input placeholder="Position" value={editedSpeaker.position} onChange={onTextChange} name="position" />
      </Form.Item>
      <Form.Item label="Image">
        {editedSpeaker.image && (
          <Image
            src={editedSpeaker.image}
            alt={`${editedSpeaker.fullName} || 'Picture of Speaker'`}
            style={{ marginBottom: 12 }}
          />
        )}
        <Button
          type="dashed"
          icon={<FileImageOutlined />}
          style={{ display: 'block' }}
          onClick={randomImageGeneratorClickHandler}
        >
          Generate an image
        </Button>
      </Form.Item>
      <Form.Item label="Speeches">
        <Select
          mode="tags"
          placeholder="Select speeches"
          value={editedSpeaker.speechIds}
          onChange={handleSpeechesSelect}
          options={speechOptions}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  )
}
