import { FC, MouseEventHandler, useCallback } from 'react'
import { Col, Row } from 'antd'
import { selectConferences } from '@store/conferences/selectors'
import { selectEditableSpeakerId, selectSpeakers } from '@store/speakers/selectors'
import { selectIsSpeechesPending, selectSpeeches } from '@store/speeches/selectors'
import { setEditableSpeechId } from '@store/speeches/slice'
import { Speech as SpeechType } from '@store/speeches/types'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { Speaker } from './speaker'

export const SpeakersList: FC = () => {
  const dispatch = useAppDispatch()
  const speeches = useAppSelector(selectSpeeches)
  const conferences = useAppSelector(selectConferences)
  const speakers = useAppSelector(selectSpeakers)
  const editableId = useAppSelector(selectEditableSpeakerId)
  const isSpeechesPending = useAppSelector(selectIsSpeechesPending)

  const handleEditSpeech: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      const speechId = e.currentTarget.dataset.speechId as SpeechType['id']
      dispatch(setEditableSpeechId(speechId))
    },
    [dispatch]
  )

  if (!speeches.allIds.length) return null

  return (
    <Row gutter={[12, 12]} align={'stretch'} style={{ width: '100%', minWidth: 800 }}>
      {speakers.allIds.map((speakerId) => {
        const speaker = speakers.byId[speakerId]
        return (
          <Col key={speaker.id} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Speaker
              speaker={speaker}
              onClick={speaker}
              isPending={editableId === speech.id && isSpeechesPending}
              conference={conferences.byId[speaker.conferenceId]}
            />
          </Col>
        )
      })}
    </Row>
  )
}
