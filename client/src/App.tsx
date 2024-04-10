import React from 'react'
import { StoreProvider } from '@store'
import { Tabs } from '@components/tabs'
import 'assets/styles/normalize.css'

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Tabs />
    </StoreProvider>
  )
}

export default App
