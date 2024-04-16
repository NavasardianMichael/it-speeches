import { FC } from 'react'
import { Flex } from 'antd'
import { Conference } from '@store/conferences/types'
import { selectSpeeches } from '@store/speeches/selectors'
import { useAppSelector } from '@hooks/useAppSelector'
import { DescriptionDetail } from './Detail'

type Props = {
  details: Conference
}

export const Description: FC<Props> = ({ details }) => {
  const speeches = useAppSelector(selectSpeeches)
  return (
    <Flex gap="small" vertical style={{ marginTop: 12, whiteSpace: 'nowrap' }}>
      <DescriptionDetail name="Location" value={details.location} />
      <DescriptionDetail name="Date" value={details.date} />
      <DescriptionDetail
        name="Speeches"
        value={details.speechIds.map((speechId) => speeches.byId[speechId].topic).join(', ')}
      />
    </Flex>
  )
}
