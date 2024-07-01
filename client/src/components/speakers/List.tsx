import { FC, MouseEventHandler, useCallback } from 'react'
import { Col, Row } from 'antd'
import { selectEditableSpeakerId, selectIsSpeakersPending, selectSpeakers } from '@store/speakers/selectors'
import { setEditableSpeakerId } from '@store/speakers/slice'
import { Speaker as SpeakerType } from '@store/speakers/types'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { Speaker } from './speaker'

export const SpeakersList: FC = () => {
  const dispatch = useAppDispatch()
  const speakers = useAppSelector(selectSpeakers)
  const editableId = useAppSelector(selectEditableSpeakerId)
  const isSpeakersPending = useAppSelector(selectIsSpeakersPending)

  const handleEditSpeaker: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      const speakerId = e.currentTarget.dataset.speakerId as SpeakerType['id']
      dispatch(setEditableSpeakerId(speakerId))
    },
    [dispatch]
  )

  if (!speakers.allIds.length) return null

  return (
    <Row gutter={[12, 12]} align={'stretch'} style={{ width: '100%', minWidth: 800 }}>
      {speakers.allIds.map((speakerId) => {
        const speaker = speakers.byId[speakerId]
        return (
          <Col key={speaker.id} xs={24} sm={8} xl={6}>
            <Speaker
              speaker={speaker}
              onClick={handleEditSpeaker}
              isPending={editableId === speaker.id && isSpeakersPending}
            />
          </Col>
        )
      })}
    </Row>
  )
}
