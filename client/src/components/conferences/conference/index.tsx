import { FC, MouseEventHandler } from 'react'
import { Card, Image, Skeleton } from 'antd'
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
        className={styles.item}
        avatar={{ size: 'large', shape: 'square' }}
        paragraph={{ rows: 5 }}
        style={{ padding: 8, border: '1px solid #f0f0f0', borderRadius: 8 }}
      />
    )

  return (
    <>
      <Card
        hoverable
        onClick={onClick}
        data-conference-id={data.id}
        className={styles.item}
        cover={
          <Image
            preview={false}
            alt={`Image of conference "${data.name || '-'}"`}
            src={data.image}
            style={{ width: '100%' }}
            fallback="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
          />
        }
      >
        <Meta title={data.name} description={<Description details={data} />} />
      </Card>
    </>
  )
}
