import { FC } from 'react'
import { Flex } from 'antd'
import Title from 'antd/es/typography/Title'
import { selectIsConferenceEditModeActive } from '@store/conferences/selectors'
import { useAppSelector } from '@hooks/useAppSelector'
import { STATE_SLICE_NAMES } from '@helpers/constants/store'
import { NewEntityCreator } from '@components/newEntityCreator'
import { ConferenceForm } from './Form'
import { ConferencesList } from './List'

export const Conferences: FC = () => {
  const isEditModeActive = useAppSelector(selectIsConferenceEditModeActive)

  return (
    <div>
      <Title>Conferences</Title>
      <NewEntityCreator entity={STATE_SLICE_NAMES.conferences} />
      <Flex gap="large" align="start" style={{ marginTop: 48 }}>
        <ConferencesList />
        {isEditModeActive && <ConferenceForm key="conference-form" />}
      </Flex>
    </div>
  )
}
