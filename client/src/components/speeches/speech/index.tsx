import { FC, MouseEventHandler } from 'react'
import { Card, Image, Skeleton } from 'antd'
import Meta from 'antd/es/card/Meta'
import { Conference } from '@store/conferences/types'
import { Speaker } from '@store/speakers/types'
import { Speech as SpeechType, SpeechesSlice } from '@store/speeches/types'
import { Description } from './description'

type Props = {
  speech: SpeechType
  onClick: MouseEventHandler<HTMLDivElement>
  isPending: SpeechesSlice['isPending']
  conference: Conference
  speaker: Speaker
}

export const Speech: FC<Props> = ({ speech, onClick, isPending, conference, speaker }) => {
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
        data-speech-id={speech.id}
        cover={
          <Image
            preview={false}
            alt={`Image of speech "${speech.topic || '-'}"`}
            src={speech.image}
            style={{ width: '100%' }}
            fallback="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
          />
        }
      >
        <Meta
          title={speech.topic}
          description={
            <Description details={speech} 
              conference={conference} 
              speaker={speaker} 
            />
          }
        />
      </Card>
    </>
  )
}
