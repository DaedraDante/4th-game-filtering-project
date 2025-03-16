What is this project about?
 - I want to create a filtering list project , filtering games

I want to learn how to use basic react and with this project I'll also tap into conditional rendering and overall just helping me get a better feel of react.

Main functionality is:
You select an x genre option from the select element at the top and only x genre games are displayed

So now I made it so that I return a mapping function that has 4 properties , the key property and thee 3 other properties that are assigned to their counterpart in the game component , I assign the props of the component to the data in the array of objects so each object inside the array has the properties of the props of that game's component , title releaseDate genre , so like this : title = Game.title releaeDate = Game.releaseDate genre = Game.genre