import PlusOutlined from '@ant-design/icons/PlusOutlined'
import { NEW_ENTITY_INITIAL_STATES, TEMP_IDS } from '@helpers/constants/defaults'
import { STATE_SLICE_NAMES } from '@helpers/constants/store'
import { StateSliceName } from '@helpers/types/store'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { setConferenceOptions, setEditableId } from '@store/conferences/slice'
import { setSpeakerOptions } from '@store/speakers/slice'
import { setSpeechOptions } from '@store/speeches/slice'
import { Button, Typography } from 'antd'
import { FC, MouseEventHandler, memo } from 'react'
import styles from './styles.module.css'

type Props = {
    entity: StateSliceName
}

const entityOptionsSetterByEntityType = {
    [STATE_SLICE_NAMES.conferences]: setConferenceOptions,
    [STATE_SLICE_NAMES.speeches]: setSpeechOptions,
    [STATE_SLICE_NAMES.speakers]: setSpeakerOptions,
}

export const NewEntityCreator: FC<Props> = memo(({ entity }) => {
    const dispatch = useAppDispatch()
    const actionCreator = entityOptionsSetterByEntityType[entity]
    const action = NEW_ENTITY_INITIAL_STATES[entity]

    const handleClick: MouseEventHandler<HTMLElement> = () => {
        dispatch(setEditableId(TEMP_IDS.conferences))
        dispatch(actionCreator(action))
    }
    
    return (
        <Button type="primary" icon={<PlusOutlined />} onClick={handleClick}>
            Add <Typography.Text className={styles.entityName}>&nbsp;{entity}</Typography.Text>
        </Button>
    )
})
