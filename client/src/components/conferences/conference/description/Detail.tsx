import { Typography } from 'antd'
import { FC, ReactNode } from 'react'

type Props = {
    name: string
    value: ReactNode
}

export const DescriptionDetail: FC<Props> = ({ name, value }) => {
    if(!value) return null;

    return (
        <Typography.Paragraph style={{marginBottom: 0}}>
            <Typography.Text strong>
                {name}:&nbsp;
            </Typography.Text>
            <Typography.Text ellipsis>
                {value}
            </Typography.Text>
        </Typography.Paragraph>
    )
}