import { FC, MouseEventHandler, useCallback } from 'react'
import { Col, Row } from 'antd'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { Speech } from './speech'
import { selectEditableId, selectIsSpeechesPending, selectSpeeches } from '@store/speeches/selectors'
import { setEditableSpeechId } from '@store/speeches/slice'
import { Speech as SpeechType } from '@store/speeches/types'
import { selectConferences } from '@store/conferences/selectors'
import { selectSpeakers } from '@store/speakers/selectors'

type Props = unknown

export const SpeechesList: FC<Props> = () => {
  const dispatch = useAppDispatch()
  const speeches = useAppSelector(selectSpeeches)
  const conferences = useAppSelector(selectConferences)
  const speakers = useAppSelector(selectSpeakers)
  const editableId = useAppSelector(selectEditableId)
  const isSpeechesPending = useAppSelector(selectIsSpeechesPending)

  const handleEditSpeech: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      const speechId = e.currentTarget.dataset.speechId as SpeechType['id']
      dispatch(setEditableSpeechId(speechId))
    },
    [dispatch]
  )

  if(!speeches.allIds.length) return null;

  return (
    <Row gutter={12} style={{ width: '100%', minWidth: 800 }}>
      {speeches.allIds.map((speechId) => {
        const speech = speeches.byId[speechId]
        return (
          <Col key={speech.id} xs={24} sm={12} md={8} lg={6} xl={4}>
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
