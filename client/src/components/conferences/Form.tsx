import { FC, MouseEventHandler, useEffect, useState } from 'react'
import { FileImageOutlined } from '@ant-design/icons'
import { Button, Form, FormProps, Image, Input, InputProps, Select, SelectProps } from 'antd'
import { selectConferences, selectEditableConference, selectIsConferencesPending } from '@store/conferences/selectors'
import { setConferenceOptionsAsync } from '@store/conferences/thunks'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { STATE_SLICE_NAMES } from '@helpers/constants/store'
import { generateRandomAvatarForEntity } from '@helpers/utils/avatars'

type Props = unknown

export const ConferenceForm: FC<Props> = () => {
  const conferences = useAppSelector(selectConferences)
  const dispatch = useAppDispatch()
  const editableConference = useAppSelector(selectEditableConference)
  const isConferencesPending = useAppSelector(selectIsConferencesPending)
  const [editedConference, setEditedConferenceOptions] = useState(editableConference)
  const handleChange: SelectProps['onChange'] = (value, option) => {
    console.log({ value, option })
    // dispatch(setConferenceOptions())
  }

  useEffect(() => {
    setEditedConferenceOptions(editableConference)
  }, [editableConference])

  const onTextChange: InputProps['onChange'] = (e) => {
    setEditedConferenceOptions((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleGenerateRandomImageClick: MouseEventHandler<HTMLElement> = () => {
    setEditedConferenceOptions((prev) => ({
      ...prev,
      image: generateRandomAvatarForEntity(STATE_SLICE_NAMES.conferences),
    }))
  }

  const submitConference: FormProps['onFinish'] = () => {
    dispatch(setConferenceOptionsAsync(editedConference))
  }

  return (
    <Form layout="vertical" style={{ width: '30%' }} disabled={isConferencesPending} onFinish={submitConference}>
      <Form.Item label="Name">
        <Input required placeholder="Name" value={editedConference.name} onChange={onTextChange} name="name" />
      </Form.Item>
      <Form.Item label="Location">
        <Input
          placeholder="input placeholder"
          value={editedConference.location}
          onChange={onTextChange}
          name="location"
        />
      </Form.Item>
      <Form.Item label="Date">
        <Input placeholder="Date" value={editedConference.date} onChange={onTextChange} name="date" />
      </Form.Item>
      <Form.Item label="Image">
        {editedConference.image && (
          <Image
            src={editedConference.image}
            alt={`Conference named "${editedConference.name} || 'Conference Image'"`}
            style={{ marginBottom: 12 }}
          />
        )}
        <Button
          type="dashed"
          icon={<FileImageOutlined />}
          style={{ display: 'block' }}
          onClick={handleGenerateRandomImageClick}
        >
          Generate an image
        </Button>
      </Form.Item>
      <Form.Item label="Speeches">
        <Select
          mode="tags"
          placeholder="Please select"
          value={editedConference.speechIds}
          onChange={handleChange}
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
