import { FC, MouseEventHandler, useCallback } from 'react'
import { Flex } from 'antd'
import { selectConferences, selectEditableId, selectIsConferncesPending } from '@store/conferences/selectors'
import { setEditableId } from '@store/conferences/slice'
import { Conference as ConferenceType } from '@store/conferences/types'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { Conference } from './conference'

type Props = unknown

export const ConferencesList: FC<Props> = () => {
  const dispatch = useAppDispatch()
  const conferences = useAppSelector(selectConferences)
  const editableId = useAppSelector(selectEditableId)
  const isConferncesPending = useAppSelector(selectIsConferncesPending)

  const handleEditConference: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      const conferenceId = e.currentTarget.dataset.conferenceId as ConferenceType['id']
      dispatch(setEditableId(conferenceId))
    },
    [dispatch]
  )

  return (
    <Flex gap="small" wrap="wrap" style={{ width: '100%', minWidth: 800 }}>
      {conferences.allIds.map((conferenceId) => {
        const conference = conferences.byId[conferenceId]
        return (
          <Conference
            key={conference.id}
            data={conference}
            onClick={handleEditConference}
            isPending={editableId === conference.id && isConferncesPending}
          />
        )
      })}
    </Flex>
  )
}
