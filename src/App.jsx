import { Suspense, useState } from 'react'
import './App.css'
import NevBar from './component/NevBar'
import Hero from './component/Hero'
import Player from './component/Player/Player';

const fetchPlayer = async()=> {
  const res = await fetch("/data.json");
  return res.json();
};


const playerPromise = fetchPlayer();
function App() {

  return (
    <>
     <NevBar></NevBar>
     <Hero></Hero>
     <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <Player playerPromise={playerPromise}></Player>
     </Suspense>
    </>
  )
}

export default App
