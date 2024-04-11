import { FC } from 'react'
import { Button, Form, Input, InputProps, Select, SelectProps } from 'antd'
import { Conference } from '@store/conferences/types'
import { selectSpeeches } from '@store/speeches/selectors'
import { useAppSelector } from '@hooks/useAppSelector'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { setConferenceOptions } from '@store/conferences/slice'

type Props = {
  conference: Conference
}

export const ConferenceForm: FC<Props> = ({ conference }) => {
  const speeches = useAppSelector(selectSpeeches)
  const dispatch = useAppDispatch()
  const handleChange: SelectProps['onChange'] = (value, option) => {
    console.log({ value, option })
    // dispatch(setConferenceOptions())
  }

  const onTextChange: InputProps['onChange'] = (e) => {
    dispatch(setConferenceOptions())
  }

  return (
    <Form style={{ maxWidth: 400 }} layout="vertical">
      <Form.Item label="Name">
        <Input placeholder="Name" value={conference.name} onChange={onTextChange} name="name" />
      </Form.Item>
      <Form.Item label="Location">
        <Input placeholder="input placeholder" value={conference.location} onChange={onTextChange} name="location" />
      </Form.Item>
      <Form.Item label="Date">
        <Input placeholder="input placeholder" value={conference.date} onChange={onTextChange} name="date" />
      </Form.Item>
      <Form.Item label="Image">
        <Input placeholder="input placeholder" value={conference.image} onChange={onTextChange} name="image" />
      </Form.Item>
      <Form.Item>
        <Select
          mode="tags"
          placeholder="Please select"
          value={conference.speechIds}
          onChange={handleChange}
          style={{ width: '100%' }}
          options={speeches.allIds.map((id) => ({
            value: id,
            label: speeches.byId[id].topic,
          }))}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Save</Button>
      </Form.Item>
    </Form>
  )
}
