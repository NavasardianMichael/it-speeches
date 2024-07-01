import { FC } from 'react'
import { Flex } from 'antd'
import { Speaker } from '@store/speakers/types'
import { selectSpeeches } from '@store/speeches/selectors'
import { useAppSelector } from '@hooks/useAppSelector'
import { DescriptionDetail } from './Detail'

type Props = {
  details: Speaker
}

export const Description: FC<Props> = ({ details }) => {
  const speeches = useAppSelector(selectSpeeches)

  return (
    <Flex gap="small" vertical style={{ marginTop: 12, whiteSpace: 'nowrap' }}>
      <DescriptionDetail name="Position" value={details.position} />
      <DescriptionDetail
        name="Conference"
        value={details.speechIds.map((speechId) => speeches.byId[speechId].topic).join(', ')}
      />
    </Flex>
  )
}
