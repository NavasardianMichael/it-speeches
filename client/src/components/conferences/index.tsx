import { FC } from 'react'
import Title from 'antd/es/typography/Title'
import styles from './styles.module.css'

type Props = unknown

export const Conferences: FC<Props> = () => {
  return (
    <div className={styles.conferences}>
      <Title>Conferences</Title>
    </div>
  )
}
