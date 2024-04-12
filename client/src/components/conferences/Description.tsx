import { Conference } from '@store/conferences/types'
import { Flex } from 'antd'
import { FC } from 'react'
import { DescriptionDetail } from './DescriptionDetail'
import { useAppSelector } from '@hooks/useAppSelector'
import { selectSpeeches } from '@store/speeches/selectors'

type Props = {
    details: Conference
}

export const Description: FC<Props> = ({ details }) => {
    const speeches = useAppSelector(selectSpeeches)
  return (
    <Flex gap='small' vertical style={{marginTop: 12}}>
        <DescriptionDetail name='Location' value={details.location} />
        <DescriptionDetail name='Date' value={details.date} />
        <DescriptionDetail name='Speakers' value={details.speechIds.map(speechId => speeches.byId[speechId].topic).join(', ')} />
    </Flex>
  )
}