import { FC, MouseEventHandler, useCallback } from 'react'
import { Card, Flex } from 'antd'
import Meta from 'antd/es/card/Meta'
import { selectConferences } from '@store/conferences/selectors'
import { useAppSelector } from '@hooks/useAppSelector'
import { Description } from './conference/description'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { setEditableId } from '@store/conferences/slice'
import { Conference } from '@store/conferences/types'

type Props = unknown

export const ConferencesList: FC<Props> = () => {
  const dispatch = useAppDispatch()
  const conferences = useAppSelector(selectConferences)
  
  const handleEditConference: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
    const conferenceId = e.currentTarget.dataset.conferenceId as Conference['id']
    console.log({conferenceId});
    dispatch(setEditableId(conferenceId))
  }, [dispatch])

  return (
    <Flex gap="middle">
      {conferences.allIds.map((conferenceId) => {
        const conference = conferences.byId[conferenceId]
        return (
          <Card
            key={conferenceId}
            hoverable
            onClick={handleEditConference}
            data-conference-id={conferenceId}
            style={{ width: '30%' }}
            cover={<img alt="example" src={conference.image} style={{width: '100%'}} />}
          >
            <Meta title={conference.name} description={<Description details={conference} />} />
          </Card>
        )
      })}
    </Flex>
  )
}
