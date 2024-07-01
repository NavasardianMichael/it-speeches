import { FC, MouseEventHandler, useCallback } from 'react'
import { Col, Row } from 'antd'
import { selectConferences } from '@store/conferences/selectors'
import { selectSpeakers } from '@store/speakers/selectors'
import { selectEditableSpeechId, selectIsSpeechesPending, selectSpeeches } from '@store/speeches/selectors'
import { setEditableSpeechId } from '@store/speeches/slice'
import { Speech as SpeechType } from '@store/speeches/types'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { Speech } from './speech'

export const SpeechesList: FC = () => {
  const dispatch = useAppDispatch()
  const speeches = useAppSelector(selectSpeeches)
  const conferences = useAppSelector(selectConferences)
  const speakers = useAppSelector(selectSpeakers)
  const editableId = useAppSelector(selectEditableSpeechId)
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
      {speeches.allIds.map((speechId) => {
        const speech = speeches.byId[speechId]
        return (
          <Col key={speech.id} xs={24} sm={8} xl={6}>
            <Speech
              speech={speech}
              onClick={handleEditSpeech}
              isPending={editableId === speech.id && isSpeechesPending}
              conference={conferences.byId[speech.conferenceId]}
              speaker={speakers.byId[speech.speakerId]}
            />
          </Col>
        )
      })}
    </Row>
  )
}
