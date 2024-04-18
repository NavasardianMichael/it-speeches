import { Speech } from '@store/speeches/types'
import { Flex } from 'antd'
import { FC } from 'react'
import { DescriptionDetail } from './Detail'
import { Conference } from '@store/conferences/types'
import { Speaker } from '@store/speakers/types'

type Props = {
  details: Speech
  conference: Conference
  speaker: Speaker
}

export const Description: FC<Props> = ({ details, conference, speaker }) => {
  return (
    <Flex gap="small" vertical style={{ marginTop: 12, whiteSpace: 'nowrap' }}>
      <DescriptionDetail name="Duration" value={details.duration} />
      <DescriptionDetail name="Conference" value={conference?.name} />
      <DescriptionDetail name="Speaker" value={speaker?.fullName} />
    </Flex>
  )
}
