import { useState } from 'react'
import Game from './Game'

function App() {

  const [games, setGames] = useState([{
    title: "Minecraft",
    releaseDate: 2011,
    genre: "Sandbox"
  },
  {
    title: "League of Legends",
    releaseDate: 2011,
    genre: "MOBA"
  },
  {
    title: "CS 2",
    releaseDate: 2011,
    genre: "FPS"
  },
  {
    title: "PUBG",
    releaseDate: 2011,
    genre: "Battle-Royale"
  },
  {
    title: "Skyrim",
    releaseDate: 2011,
    genre: "RPG"
  },
  {
    title: "FORTNITE",
    releaseDate: 2011,
    genre: "Battle-Royale"
  },
  {
    title: "DOTA",
    releaseDate: 2011,
    genre: "MOBA"
  },
  {
    title: "Garry's Mod",
    releaseDate: 2011,
    genre: "Sandbox"
  },
  {
    title: "Grim Dawn",
    releaseDate: 2011,
    genre: "RPG"
  },
  {
    title: "Apex Legends",
    releaseDate: 2011,
    genre: "Battle-Royale"
  },
  {
    title: "HALO 2",
    releaseDate: 2011,
    genre: "FPS"
  },
]);

  

  const handleSelectChange = (e) => {
      console.log(e.target.value);
      
  }

  return (
    <>
     <select name="" id="select-genre-button" onChange={handleSelectChange}>
      <option value="">Select genre</option>
      <option value="FPS">FPS</option>
      <option value="Sandbox">Sandbox</option>
      <option value="Moba">Moba</option>
      <option value="RPG">RPG</option>
      <option value="Battle-Royale">Battle-Royale</option>
     </select>
     <div className='games-container'>
      {games.map(game => (
        <Game 
        key= {game.title}
        title= {game.title}
        releaseDate = {game.releaseDate}
        genre = {game.genre}
        />
      ))}
     </div>
    </>
  )
}

export default App
