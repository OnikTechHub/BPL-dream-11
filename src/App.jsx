import { Suspense, useState } from 'react'
import './App.css'
import NevBar from './component/NevBar'
import Hero from './component/Hero'
import Player from './component/Player/Player';

const fetchPlayer = async()=> {
  const res = await fetch("/data.json");
  return res.json();
};



function App() {
  const playerPromise = fetchPlayer();
  const [coin, setCoin] =useState(50000)

  return (
    <>
     <NevBar coin={coin}></NevBar>
     <Hero></Hero>
     <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <Player playerPromise={playerPromise} setCoin={setCoin} coin={coin}></Player>
     </Suspense>
    </>
  )
}

export default App
