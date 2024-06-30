import { FC, MouseEventHandler, memo } from 'react'
import PlusOutlined from '@ant-design/icons/PlusOutlined'
import { Button, Typography } from 'antd'
import { setConferenceOptions, setEditableConferenceId } from '@store/conferences/slice'
import { setEditableSpeakerId, setSpeakerOptions } from '@store/speakers/slice'
import { setEditableSpeechId, setSpeechOptions } from '@store/speeches/slice'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { NEW_ENTITY_INITIAL_STATES, TEMP_IDS } from '@helpers/constants/defaults'
import { STATE_SLICE_NAMES } from '@helpers/constants/store'
import { StateSliceName } from '@helpers/types/store'
import styles from './styles.module.css'

type Props = {
  entity: StateSliceName
}

const EDITABLE_ENTITY_ID_SETTER = {
  [STATE_SLICE_NAMES.conferences]: setEditableConferenceId,
  [STATE_SLICE_NAMES.speeches]: setEditableSpeechId,
  [STATE_SLICE_NAMES.speakers]: setEditableSpeakerId,
}

const OPTIONS_SETTER_BY_ENTITY = {
  [STATE_SLICE_NAMES.conferences]: setConferenceOptions,
  [STATE_SLICE_NAMES.speeches]: setSpeechOptions,
  [STATE_SLICE_NAMES.speakers]: setSpeakerOptions,
}

export const NewEntityCreator: FC<Props> = memo(({ entity }) => {
  const dispatch = useAppDispatch()
  const editableIdSetter = EDITABLE_ENTITY_ID_SETTER[entity]
  const optionsSetter = OPTIONS_SETTER_BY_ENTITY[entity]
  const action = NEW_ENTITY_INITIAL_STATES[entity]

  const handleClick: MouseEventHandler<HTMLElement> = () => {
    dispatch(editableIdSetter(TEMP_IDS[entity]))
    dispatch(optionsSetter(action))
  }

  return (
    <Button type="primary" icon={<PlusOutlined />} onClick={handleClick}>
      Add <Typography.Text className={styles.entityName}>&nbsp;{entity}</Typography.Text>
    </Button>
  )
})
