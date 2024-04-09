import { FC } from 'react'
import Title from 'antd/es/typography/Title'
import styles from './styles.module.css'

type Props = unknown

export const Speeches: FC<Props> = () => {
  return (
    <div className={styles.speeches}>
      <Title>Speeches</Title>
    </div>
  )
}
