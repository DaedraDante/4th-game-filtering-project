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
    title: "FAR CRY 6",
    releaseDate: 2011,
    genre: "FPS"
  },
  {
    title: "SMITE",
    releaseDate: 2011,
    genre: "MOBA"
  },
  {
    title: "Dont Starve",
    releaseDate: 2011,
    genre: "Sandbox"
  },
  {
    title: "Neverwinter",
    releaseDate: 2011,
    genre: "RPG"
  },
  {
    title: "H1Z1",
    releaseDate: 2011,
    genre: "Battle-Royale"
  },
  {
    title: "Valorant",
    releaseDate: 2011,
    genre: "FPS"
  },
  
]);
  const [selectedGenre, setSelectedGenre] = useState("AnyGenre");
  const [selectedOrder, setSelectedOrder] = useState("");
  const [alphabeticallySortedGames, setAlphabeticallySortedGames] = useState([]);
  const [reverseAlphabeticallySortedGames, setReverseAlphabeticallySortedGames] = useState([]);

  const displayAllGames = () => {
     return games.map(game => (
        <Game 
        key= {game.title}
        title = {game.title}
        releaseDate = {game.releaseDate}
        genre = {game.genre}
        />
      ))
  };

  const displayFilteredGames = () => {
    return games
    .filter(game => game.genre === selectedGenre)
    .map(game => 
      <Game 
      key = {game.title}
      title = {game.title}
      releaseDate = {game.releaseDate}
      genre = {game.genre}
      />
    )
  };

  //function to order games alphabetically
  const displayAlphabeticalOrder = () => {
    console.log("displaying alphabetical");
    let alphabeticallySortedGames = [...games]
    return alphabeticallySortedGames
    .sort((a,b) => a.title.localeCompare(b.title))
    .map(game => 
      <Game 
      key = {game.title}
      title = {game.title}
      releaseDate = {game.releaseDate}
      genre = {game.genre}
      />
    )
  };

  //function to order games reverse alphabetically
  const displayReverseAlphabeticalOrder = () => {
    console.log("displaying reverse alphabetical ");
    let reverseAlphabeticallySortedGames = [...games]
    return reverseAlphabeticallySortedGames
    .sort((a,b) => b.title.localeCompare(a.title))
    .map(game => 
      <Game 
      key = {game.title}
      title = {game.title}
      releaseDate = {game.releaseDate}
      genre = {game.genre}
      />
    )
  };

  //function to be called inside JSX so that it enables ordering
  const handleAlphabeticalOrdering = () => {
    if(selectedOrder === "Alphabetical Order") {
      return displayAlphabeticalOrder()
    }else if(selectedOrder === "Reverse Alphabetical Order") {
      return displayReverseAlphabeticalOrder();
    }
  };

  //function to handle the select genre input value
  const handleSelectGenreChange = (e) => {
      setSelectedGenre(e.target.value);
  };
  //function to handle the select order input value
  const handleSelectOrderChange = (e) => {
      setSelectedOrder(e.target.value);
  };

  return (
    <>
     <select name="" className="select-genre-element" onChange={handleSelectGenreChange}>
      <option value="AnyGenre">All genres</option>
      <option value="FPS">FPS</option>
      <option value="Sandbox">Sandbox</option>
      <option value="MOBA">Moba</option>
      <option value="RPG">RPG</option>
      <option value="Battle-Royale">Battle-Royale</option>
     </select>
     <select name="" className="select-order-element" onChange={handleSelectOrderChange}>Select order
      <option value="default">Select Alphabetical Order</option>
      <option value="Alphabetical Order">Alphabtical</option>
      <option value="Reverse Alphabetical Order">Reverse Alphabetical</option>
     </select>
     <div className='games-container'>
      {selectedGenre === "AnyGenre" ? displayAllGames() : displayFilteredGames()}
      {handleAlphabeticalOrdering()}
     </div>
    </>
  )
}

export default App
