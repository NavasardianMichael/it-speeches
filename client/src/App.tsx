import React from 'react'
import { StoreProvider } from '@store'
import { Tabs } from '@components/tabs'
import 'assets/styles/normalize.css'
import { Flex } from 'antd'

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Flex style={{padding: 16}}>
        <Tabs />
      </Flex>
    </StoreProvider>
  )
}

export default App
