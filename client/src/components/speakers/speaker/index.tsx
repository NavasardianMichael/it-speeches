import { FC, MouseEventHandler } from 'react'
import { Card, Image, Skeleton } from 'antd'
import Meta from 'antd/es/card/Meta'
import { Speaker as SpeakerType, SpeakersSlice } from '@store/speakers/types'
import { Description } from './description'

type Props = {
  speaker: SpeakerType
  onClick: MouseEventHandler<HTMLDivElement>
  isPending: SpeakersSlice['isPending']
}

export const Speaker: FC<Props> = ({ speaker, onClick, isPending }) => {
  if (isPending)
    return (
      <Skeleton
        title
        active
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
        data-speaker-id={speaker.id}
        cover={
          <Image
            preview={false}
            alt={`Picture of speaker "${speaker || '-'}"`}
            src={speaker.image}
            style={{ width: '100%' }}
            fallback="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
          />
        }
      >
        <Meta title={speaker.fullName} description={<Description details={speaker} />} />
      </Card>
    </>
  )
}
