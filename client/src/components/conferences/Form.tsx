import { FC, MouseEventHandler } from 'react'
import { Button, Form, Image, Input, InputProps, Select, SelectProps } from 'antd'
import { selectSpeeches } from '@store/speeches/selectors'
import { useAppSelector } from '@hooks/useAppSelector'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { setConferenceOptions } from '@store/conferences/slice'
import { selectEditableConference, selectEditableId } from '@store/conferences/selectors'
import { generateRandomAvatarForEntity } from '@helpers/utils/avatars'
import { STATE_SLICE_NAMES } from '@helpers/constants/store'
import { FileImageOutlined } from '@ant-design/icons'
import { setConferenceOptionsAsync } from '@store/conferences/thunks'

type Props = unknown

export const ConferenceForm: FC<Props> = () => {
  const speeches = useAppSelector(selectSpeeches)
  const dispatch = useAppDispatch()
  const editableId = useAppSelector(selectEditableId)
  const editableConference = useAppSelector(selectEditableConference)
  const handleChange: SelectProps['onChange'] = (value, option) => {
    console.log({ value, option })
    // dispatch(setConferenceOptions())
  }

  const onTextChange: InputProps['onChange'] = (e) => {
    dispatch(setConferenceOptions({
        id: editableId,
        [e.target.name]: e.target.value
    }))
  }

  const handleGenerateRandomImageClick: MouseEventHandler<HTMLElement> = () => {
    dispatch(setConferenceOptions({
        id: editableId,
        image: generateRandomAvatarForEntity(STATE_SLICE_NAMES.conferences)
    }))
  }

  const handleSaveNewConferenceClick: MouseEventHandler<HTMLElement> = () => {
    dispatch(setConferenceOptionsAsync(editableConference))
  }

  return (
    <Form style={{ maxWidth: 400 }} layout="vertical">
      <Form.Item label="Name">
        <Input placeholder="Name" value={editableConference.name} onChange={onTextChange} name="name" />
      </Form.Item>
      <Form.Item label="Location">
        <Input placeholder="input placeholder" value={editableConference.location} onChange={onTextChange} name="location" />
      </Form.Item>
      <Form.Item label="Date">
        <Input placeholder="input placeholder" value={editableConference.date} onChange={onTextChange} name="date" />
      </Form.Item>
      <Form.Item label="Image">
        {
            editableConference.image &&
            <Image
                src={editableConference.image}
                alt={`Conference named "${editableConference.name} || 'Conference Image'"`}
                style={{marginBottom: 12}}
            />
        }
        <Button type="dashed" icon={<FileImageOutlined />}  onClick={handleGenerateRandomImageClick}>
            Generate Random Avatar
        </Button>
      </Form.Item>
      <Form.Item label="Speeches">
        <Select
          mode="tags"
          placeholder="Please select"
          value={editableConference.speechIds}
          onChange={handleChange}
          options={speeches.allIds.map((id) => ({
            value: id,
            label: speeches.byId[id].topic,
          }))}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleSaveNewConferenceClick}>Save</Button>
      </Form.Item>
    </Form>
  )
}
