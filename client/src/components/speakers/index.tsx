import { FC } from 'react'
import Title from 'antd/es/typography/Title'
import styles from './styles.module.css'

type Props = unknown

export const Speakers: FC<Props> = () => {
  return (
    <div className={styles.speakers}>
      <Title>Speakers</Title>
    </div>
  )
}
