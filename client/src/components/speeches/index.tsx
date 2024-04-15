import { NewEntityCreator } from '@components/newEntityCreator'
import { STATE_SLICE_NAMES } from '@helpers/constants/store'
import { useAppSelector } from '@hooks/useAppSelector'
import { Flex } from 'antd'
import Title from 'antd/es/typography/Title'
import { FC } from 'react'
import { SpeechForm } from './Form'
import { SpeechesList } from './List'
import { selectIsEditModeActive } from '@store/speeches/selectors'

type Props = unknown

export const Speeches: FC<Props> = () => {
  const isEditModeActive = useAppSelector(selectIsEditModeActive)

  return (
    <div>
      <Title>Speeches</Title>
      <NewEntityCreator entity={STATE_SLICE_NAMES.speeches} />
      <Flex gap="large" align="start" style={{ marginTop: 48 }}>
        <SpeechesList />
        {isEditModeActive && <SpeechForm key="speech-form" />}
      </Flex>
    </div>
  )
}
