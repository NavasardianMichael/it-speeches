import { useAppSelector } from '@hooks/useAppSelector'
import { selectConferences } from '@store/conferences/selectors'
import { Card, Flex } from 'antd'
import Meta from 'antd/es/card/Meta'
import { FC } from 'react'
import { Description } from './Description'
import styles from './styles.module.css'

type Props = unknown

export const ConferencesList: FC<Props> = () => {
  const conferences = useAppSelector(selectConferences)
  
  return (
    <Flex gap='middle' style={{marginTop: 48}}>
    {
      conferences.allIds.map(conferenceId => {
        const conference = conferences.byId[conferenceId]
        return (
          <div className={styles.conference}>
            <Card
              key={conferenceId}
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src={conference.image} />}
            >
              <Meta title={conference.name} description={<Description details={conference} />} />
            </Card> 
          </div>
        )
      })
    }
         
    </Flex>
  )
}
