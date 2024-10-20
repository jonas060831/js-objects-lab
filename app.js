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

console.log(game)
