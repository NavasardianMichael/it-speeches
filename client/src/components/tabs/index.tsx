import { useEffect } from 'react'
import { Tabs as MUITabs, TabsProps } from 'antd'
import { getConferencesAsync } from '@store/conferences/thunks'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { Conferences } from '@components/conferences'
import { Speakers } from '@components/speakers'
import { Speeches } from '@components/speeches'

const onChange = (key: string) => {
  console.log(key)
}

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Conferences',
    children: <Conferences />,
  },
  {
    key: '2',
    label: 'Speeches',
    children: <Speeches />,
  },
  {
    key: '3',
    label: 'Speakers',
    children: <Speakers />,
  },
]

export const Tabs: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getConferencesAsync())
  }, [dispatch])

  return <MUITabs defaultActiveKey="1" items={items} onChange={onChange} />
}
