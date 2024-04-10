import { FC } from 'react'
import PlusOutlined from '@ant-design/icons/PlusOutlined'
import { Button } from 'antd'
import Title from 'antd/es/typography/Title'
import { ConferenceForm } from './Form'
import styles from './styles.module.css'

type Props = unknown

export const Conferences: FC<Props> = () => {
  return (
    <div className={styles.conferences}>
      <Title>Conferences</Title>
      <Button type="primary" icon={<PlusOutlined />}>
        Add Conference
      </Button>
      <ConferenceForm />
    </div>
  )
}