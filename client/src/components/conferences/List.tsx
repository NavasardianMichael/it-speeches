import { FC, MouseEventHandler, useCallback } from 'react'
import { Col, Row } from 'antd'
import { selectConferences, selectEditableConferenceId, selectIsConferencesPending } from '@store/conferences/selectors'
import { setEditableConferenceId } from '@store/conferences/slice'
import { Conference as ConferenceType } from '@store/conferences/types'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { Conference } from './conference'

export const ConferencesList: FC = () => {
  const dispatch = useAppDispatch()
  const conferences = useAppSelector(selectConferences)
  const editableId = useAppSelector(selectEditableConferenceId)
  const isConferencesPending = useAppSelector(selectIsConferencesPending)

  const handleEditConference: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      const conferenceId = e.currentTarget.dataset.conferenceId as ConferenceType['id']
      dispatch(setEditableConferenceId(conferenceId))
    },
    [dispatch]
  )

  if (!conferences.allIds.length) return null

  return (
    <Row gutter={[12, 12]} style={{ width: '100%', minWidth: 800 }}>
      {conferences.allIds.map((conferenceId) => {
        const conference = conferences.byId[conferenceId]
        return (
          <Col key={conference.id} xs={24} sm={8} xl={6}>
            <Conference
              data={conference}
              onClick={handleEditConference}
              isPending={editableId === conference.id && isConferencesPending}
            />
          </Col>
        )
      })}
    </Row>
  )
}
