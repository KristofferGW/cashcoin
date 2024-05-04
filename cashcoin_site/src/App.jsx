import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TransactionForm } from './components/Transaction'
import { Blocklist } from './components/Blocklist'
import { Search } from './components/Search'

function App() {
  return (
    <>
        <div>
            <TransactionForm/>
            <Search/>
            <Blocklist/>
        </div>
    </>
  )
}

export default App
