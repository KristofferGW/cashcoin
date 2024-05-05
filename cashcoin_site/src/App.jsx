import './App.css'
import { useState } from 'react'
import { TransactionForm } from './components/Transaction'
import { Blocklist } from './components/Blocklist'
import { Search } from './components/Search'
import { RpcInput } from './components/RpcInput'
import { RpcContext } from './contexts/rpcContext'

function App() {
  const [rpc, setRpc] = useState(null)

  return (
    <>
        <div>
            <RpcContext.Provider value={{rpc, setRpc}}>
                <RpcInput/>
                <TransactionForm/>
                <Search/>
                <Blocklist/>
            </RpcContext.Provider>
        </div>
    </>
  )
}

export default App
