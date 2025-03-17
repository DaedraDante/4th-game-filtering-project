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
  const [selectedGame, setSelectedGame] = useState("AnyGenre");

  

  const handleSelectChange = (e) => {
      setSelectedGame(e.target.value);
  }

  return (
    <>
     <select name="" className="select-element" onChange={handleSelectChange}>
      <option value="AnyGenre">Select Genre</option>
      <option value="FPS">FPS</option>
      <option value="Sandbox">Sandbox</option>
      <option value="MOBA">Moba</option>
      <option value="RPG">RPG</option>
      <option value="Battle-Royale">Battle-Royale</option>
     </select>
     <div className='games-container'>
      {selectedGame === "AnyGenre" ?
          games.map(game => (
            <Game 
            key= {game.title}
            title= {game.title}
            releaseDate = {game.releaseDate}
            genre = {game.genre}
            />
          )) :
          games.filter(game => game.genre === selectedGame).map(game => (
            <Game 
            key= {game.title}
            title= {game.title}
            releaseDate = {game.releaseDate}
            genre = {game.genre}
            />
          ))
      }
     </div>
    </>
  )
}

export default App
