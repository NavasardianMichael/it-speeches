import { useAppSelector } from '@hooks/useAppSelector'
import { selectConferences } from '@store/conferences/selectors'
import { Card, Flex } from 'antd'
import Meta from 'antd/es/card/Meta'
import { FC } from 'react'

type Props = unknown

export const ConferencesList: FC<Props> = () => {
  const conferences = useAppSelector(selectConferences)
  
  return (
    <Flex gap='middle' style={{marginTop: 48}}>
    {
      conferences.allIds.map(conferenceId => {
        const conference = conferences.byId[conferenceId]
        return (
          <Card
            key={conferenceId}
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={conference.image} />}
          >
            <Meta title={conference.name} description={conference.date} />
          </Card> 
        )
      })
    }
         
    </Flex>
  )
}
