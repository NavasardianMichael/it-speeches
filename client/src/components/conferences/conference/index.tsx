import { FC, MouseEventHandler } from 'react'
import { Card, Skeleton } from 'antd'
import Meta from 'antd/es/card/Meta'
import { ConferenceSlice, Conference as ConferenceType } from '@store/conferences/types'
import { Description } from './description'
import styles from './styles.module.css'

type Props = {
  data: ConferenceType
  onClick: MouseEventHandler<HTMLDivElement>
  isPending: ConferenceSlice['isPending']
}

export const Conference: FC<Props> = ({ data, onClick, isPending }) => {
  if (isPending)
    return (
      <Skeleton
        title
        active
        round
        className={styles.item}
        avatar={{ size: 'large' }}
        paragraph={{ rows: 5 }}
        style={{padding: 8}}
      />
    )

  return (
    <>
      <Card
        hoverable
        onClick={onClick}
        data-conference-id={data.id}
        className={styles.item}
        cover={<img alt="example" src={data.image} style={{ width: '100%' }} />}
      >
        <Meta title={data.name} description={<Description details={data} />} />
      </Card>
    </>
  )
}
