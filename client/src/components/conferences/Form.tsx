import { FC } from 'react'
import { Button, Form, Input } from 'antd'

type Props = unknown

export const ConferenceForm: FC<Props> = () => {
  return (
    <Form style={{ maxWidth: 400 }} layout="vertical">
      <Form.Item label="Name">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Location">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Date">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Save</Button>
      </Form.Item>
    </Form>
  )
}
