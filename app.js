const pokemon = require('./data.js')


const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
}

//Exercise 1
//console.dir(pokemon, { maxArrayLength: null })

/*
• Number: A number between 1 and 151.
• Name: A string representing the Pokémon’s name.
• Type: A string indicating the Pokémon’s type.
• HP (Hit Points): A numerical value representing the Pokémon’s health.
• Starter: A boolean indicating whether the Pokémon is a starter.


There’s some game-specific terminology here, if you’re new to Pokémon, here’s an explanation of the terms used in the game:

Number: Each Pokémon has a unique number as its identifier.
Type: This refers to a Pokémon’s primary abilities. While Pokémon can have multiple types, we’re focusing on their primary type here for simplicity.
Hit Points (HP): This is a measure of a Pokémon’s health, expressed in a numerical value.
Starter Pokémon: At the beginning of the game, players choose a starting Pokémon. In our data, starter Pokémon are marked with a starter property set to true.
The starter Pokémon options are:

Pokémon 1: Bulbasaur
Pokémon 4: Charmander
Pokémon 7: Squirtle
Pokémon 25: Pikachu

When you’ve completed your inspection of the data,
you can comment out the console.dir() method and use console.log()
to log JUST the name of the Pokemon with the number 59 using the
index of the Pokemon in the array. Feel free to uncomment the console.dir()
as needed to help you complete the rest of the lab.
*/

console.log(pokemon[58])

//Exercise 2
// console.log(game)

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = 'Hard'

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

//pikachu number 1 
const pikachu = pokemon[24] //electric
game.party.push(pikachu)

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

const mewtwo = pokemon[149] //psychic
const chansey = pokemon[112] //normal
const snorlax = pokemon[142] //normal

game.party.unshift(mewtwo, chansey) //added to index 0
game.party.splice(1,0,snorlax) //added to index 1 and did not delete any other pokemon

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

game.gyms.forEach( gym => {

    if(gym.difficulty <= 3) gym.completed = true
})

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

const raichu  = pokemon[25]

game.party.splice(game.party.length -1, 1, raichu)

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

game.party.forEach( pokemon_in_party => {
    console.log(pokemon_in_party.name)
})

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

pokemon.forEach( starter_pokemon => {

    //just the name??
    if(starter_pokemon.starter) console.log(starter_pokemon.name)
})

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/


//create a method called catchPokemon and add it to the game object
//this method accept an object type named pokemonObj
game.catchPokemon = function(pokemonObj) {

    //add the pokemonObj to the game.party array
    game.party.push(pokemonObj)
    //and dont return anything
}

//pokemon object of my choice
const gyrados = pokemon[129]
//call it
game.catchPokemon(gyrados)
