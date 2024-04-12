import { FC } from 'react'
import Title from 'antd/es/typography/Title'
import { selectIsNewConferenceEditableId } from '@store/conferences/selectors'
import { useAppSelector } from '@hooks/useAppSelector'
import { STATE_SLICE_NAMES } from '@helpers/constants/store'
import { NewEntityCreator } from '@components/newEntityCreator'
import { ConferenceForm } from './Form'
import styles from './styles.module.css'
import { ConferencesList } from './List'

type Props = unknown

export const Conferences: FC<Props> = () => {
  const isNewEntityCreationModeActive = useAppSelector(selectIsNewConferenceEditableId)
  
  return (
    <div className={styles.conferences}>
      <Title>Conferences</Title>
      <NewEntityCreator entity={STATE_SLICE_NAMES.conferences} />
      {isNewEntityCreationModeActive && <ConferenceForm />}
      <ConferencesList />
    </div>
  )
}
