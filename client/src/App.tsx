import React from 'react'
import { StoreProvider } from '@store'
import { Layout } from 'antd'
import { Tabs } from '@components/tabs'
import 'assets/styles/normalize.css'

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Layout style={{ padding: 16, background: '#FFF' }}>
        <Tabs />
      </Layout>
    </StoreProvider>
  )
}

export default App
