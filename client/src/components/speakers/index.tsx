import { FC } from 'react'
import { Flex } from 'antd'
import Title from 'antd/es/typography/Title'
import { selectIsSpeakerEditModeActive } from '@store/speakers/selectors'
import { useAppSelector } from '@hooks/useAppSelector'
import { STATE_SLICE_NAMES } from '@helpers/constants/store'
import { NewEntityCreator } from '@components/newEntityCreator'
import { SpeakerForm } from './Form'
import { SpeakersList } from './List'

export const Speakers: FC = () => {
  const isEditModeActive = useAppSelector(selectIsSpeakerEditModeActive)
  return (
    <div>
      <Title>Speakers</Title>
      <NewEntityCreator entity={STATE_SLICE_NAMES.speakers} />
      <Flex gap="large" align="start" style={{ marginTop: 48 }}>
        <SpeakersList />
        {isEditModeActive && <SpeakerForm />}
      </Flex>
    </div>
  )
}
