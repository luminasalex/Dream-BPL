
import { Suspense } from 'react'
import './App.css'
import Banner from './component/Banner'
import Nav from './component/Nav'
import Players from './component/Players'
import type { iplayerType } from './type/playerType'

const PromiseFatch = async (): Promise<iplayerType[]> => {
  const res = await fetch('../data.json')
  const data = await res.json()
  return data
}

function App() {
  const PlayerPromise = PromiseFatch()
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<div>Loading...</div>}>
        <Players PlayerPromise={PlayerPromise} />
      </Suspense>
    </>
  )
}

export default App
