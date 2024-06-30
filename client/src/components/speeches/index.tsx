import { FC } from 'react'
import { Flex } from 'antd'
import Title from 'antd/es/typography/Title'
import { selectIsSpeechEditModeActive } from '@store/speeches/selectors'
import { useAppSelector } from '@hooks/useAppSelector'
import { STATE_SLICE_NAMES } from '@helpers/constants/store'
import { NewEntityCreator } from '@components/newEntityCreator'
import { SpeechForm } from './Form'
import { SpeechesList } from './List'

export const Speeches: FC = () => {
  const isEditModeActive = useAppSelector(selectIsSpeechEditModeActive)

  return (
    <div>
      <Title>Speeches</Title>
      <NewEntityCreator entity={STATE_SLICE_NAMES.speeches} />
      <Flex gap="large" align="start" style={{ marginTop: 48 }}>
        <SpeechesList />
        {isEditModeActive && <SpeechForm />}
      </Flex>
    </div>
  )
}
