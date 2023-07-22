import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'
import Blockchain from '../features/blockchain/Blockchain'

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Blockchain />
    </div>
  )
}

export default IndexPage
