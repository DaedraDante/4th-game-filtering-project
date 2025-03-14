import { useState } from 'react'
import Game from './Game'

function App() {

  return (
    <>
     <select name="" id="">
      <option value="">Select genre</option>
      <option value="">FPS</option>
      <option value="">Sandbox</option>
      <option value="">Moba</option>
      <option value="">RPG</option>
      <option value="">Battle-Royale</option>
     </select>
     <div className='games-container'>
        <Game title="Minecraft" releaseDate={2011} genre="Sandbox"/>
        <Game title="League of Legends" releaseDate={2011} genre="MOBA"/>
        <Game title="CS 2" releaseDate={2011} genre="FPS"/>
        <Game title="PUBG" releaseDate={2011} genre="Battle-Royale"/>
        <Game title="Skyrim" releaseDate={2011} genre="RPG"/>
        <Game title="Fortnite" releaseDate={2011} genre="Battle-Royale"/>
        <Game title="DOTA" releaseDate={2011} genre="MOBA"/>
        <Game title="Garry's Mod" releaseDate={2011} genre="Sandbox"/>
        <Game title="Legend of Zelda:BOTW" releaseDate={2011} genre="RPG"/>
        <Game title="Apex Legends" releaseDate={2011} genre="Battle-Royale"/>
        <Game title="HALO 2" releaseDate={2011} genre="FPS"/>
     </div>
    </>
  )
}

export default App
