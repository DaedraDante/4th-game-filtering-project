What is this project about?
 - I want to create a filtering list project , filtering games

I want to learn how to use basic react and with this project I'll also tap into conditional rendering and overall just helping me get a better feel of react.

Main functionality is:
You select an x genre option from the select element at the top and only x genre games are displayed

So now I made it so that I return a mapping function that has 4 properties , the key property and thee 3 other properties that are assigned to their counterpart in the game component , I assign the props of the component to the data in the array of objects so each object inside the array has the properties of the props of that game's component , title releaseDate genre , so like this : title = Game.title releaeDate = Game.releaseDate genre = Game.genre

 - Added the main functionability , I can now properly change between game ganres but when initially loading the page , the game container is empty , next time I'll probably make it so that first all the genres are displayed

 - Ok I literally now as I am writing this I realized that I can just set the state of the selectedGame to AnyGenre and it will automatically just initially render all of them( man I love react , I really need to get used to this) , I just proved myself again how important it is to write down your thoughts , I should use READMEs all the time.

  - I tried adding alphabetic sorting but its a bit harder than I thought and im stuck in a loop of chatgpt , I n e e d to dettach from it but it sucks now because I s u c k , I'll keep doing some smaller scale projects and very gradually change the difficulty , Im going to put this project on hold , I promise to come back and finish it , as I did with the vanilla js RPS game, trust.