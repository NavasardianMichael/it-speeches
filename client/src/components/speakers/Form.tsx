import { FC, MouseEventHandler, useEffect, useState } from 'react'
import { FileImageOutlined } from '@ant-design/icons'
import { Button, Form, FormProps, Image, Input, InputProps, Select, SelectProps } from 'antd'
import { selectConferences } from '@store/conferences/selectors'
import { selectEditableSpeaker, selectIsSpeakersPending, selectSpeakers } from '@store/speakers/selectors'
import { setSpeakerOptionsAsync } from '@store/speakers/thunks'
import { setSpeechOptionsAsync } from '@store/speeches/thunks'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { STATE_SLICE_NAMES } from '@helpers/constants/store'
import { generateRandomAvatarForEntity } from '@helpers/utils/avatars'

export const SpeakerForm: FC = () => {
  const dispatch = useAppDispatch()
  const conferences = useAppSelector(selectConferences)
  const speakers = useAppSelector(selectSpeakers)
  const editableSpeaker = useAppSelector(selectEditableSpeaker)
  const isSpeakersPending = useAppSelector(selectIsSpeakersPending)
  const [editedSpeaker, setEditedSpeakerOptions] = useState(editableSpeaker)

  const handleConferenceSelect: SelectProps['onChange'] = (value) => {
    setEditedSpeakerOptions((prev) => ({
      ...prev,
      conferenceId: value,
    }))
  }

  const handleSpeakerSelect: SelectProps['onChange'] = (value) => {
    setEditedSpeakerOptions((prev) => ({
      ...prev,
      speakerId: value,
    }))
  }

  useEffect(() => {
    setEditedSpeakerOptions(editableSpeaker)
  }, [editableSpeaker])

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

  const submitSpeaker: FormProps['onFinish'] = () => {
    dispatch(setSpeakerOptionsAsync(editedSpeaker))
  }

  return (
    <Form
      layout="vertical"
      style={{ width: '100%', maxWidth: 400 }}
      disabled={isSpeakersPending}
      onFinish={submitSpeaker}
    >
      <Form.Item label="Name">
        <Input required placeholder="Topic" value={editedSpeaker.fullName} onChange={onTextChange} name="topic" />
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
          placeholder="Select speeches"
          value={editedSpeaker.speechIds}
          onChange={handleConferenceSelect}
          options={conferences.allIds.map((id) => ({
            value: id,
            label: conferences.byId[id].name,
          }))}
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
