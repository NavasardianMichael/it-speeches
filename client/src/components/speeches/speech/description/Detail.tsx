import { FC, ReactNode } from 'react'
import { Typography } from 'antd'

type Props = {
  name: string
  value: ReactNode
}

export const DescriptionDetail: FC<Props> = ({ name, value }) => {
  return (
    <Typography.Paragraph ellipsis style={{ marginBottom: 0 }}>
      <Typography.Text strong>{name}:&nbsp;</Typography.Text>
      <Typography.Text>{value || '-'}</Typography.Text>
    </Typography.Paragraph>
  )
}
