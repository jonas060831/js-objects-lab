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


/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

//copy catch pokemon decrease the pokeball quantity
game.catchPokemon = function(pokemonObj) {

    //add the pokemonObj to the game.party array
    game.party.push(pokemonObj)
    //and dont return anything

    //reduce pokeball
    game.items.forEach( item => {

        //its ok the have a negative pokeball
        if(item.name === 'pokeball') item.quantity--
    })
}

const kangaskhan = pokemon[114]
//after the update catch a pokemon
game.catchPokemon(kangaskhan)
//then log the game items
console.log(game.items)

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/


game.gyms.forEach( gym => {

    if(gym.difficulty < 6) gym.completed = true
})

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

const gymTally = { completed: 0, incomplete: 0 }

game.gymStatus = function() {
    

    this.gyms.forEach( gym => {
       if(gym.completed) gymTally.completed++
       else gymTally.incomplete++
    })
}

//executes
game.gymStatus()

console.log(gymTally)

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

game.partyCount = () => {
    return this.party.length
}

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

game.gyms.forEach( gym => {
    if(gym.difficulty < 8) gym.completed = true
})


/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log(game)

/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/
//sort by descending order then reassign the array object
game.party = game.party.sort((pokemonx, pokemony) =>  pokemony.hp - pokemonx.hp) //arrange in descending order

/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/


game.collection = []

//copy catch pokemon decrease the pokeball quantity
game.catchPokemon = function(pokemonObj) {


    //add the pokemonObj to the game.party array
    game.party.push(pokemonObj)

    //reduce pokeball
    game.items.forEach( item => {

        //its ok the have a negative pokeball
        if(item.name === 'pokeball') item.quantity--
    })

    if(game.party.length > 6) {
        
        //sort then reassign in descending order
        game.party = game.party.sort((pokemonx, pokemony) =>  pokemony.hp - pokemonx.hp)
        //remove the lowest hp pokemon considered to be the weakest
        game.collection.push(game.party.pop())
    }

    //and dont return anything
}

game.catchPokemon(pokemon[130])

//then log the game items
console.log('answer: 18', game.items)


/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/

//The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 
//Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.
//Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

//copy catch pokemon decrease the pokeball quantity
game.catchPokemon = function(pokemonObj) {

    if (game.items[1].quantity >= 1) {
        //add the pokemonObj to the game.party array
        game.party.push(pokemonObj)

        //reduce pokeball
        game.items.forEach( item => {

            //its ok the have a negative pokeball
            if(item.name === 'pokeball') item.quantity--
        })

        if(game.party.length > 6) {
            
            //sort then reassign in descending order
            game.party = game.party.sort((pokemonx, pokemony) =>  pokemony.hp - pokemonx.hp)
            //remove the lowest hp pokemon considered to be the weakest
            game.collection.push(game.party.pop())
        }
    } else {
        console.log('there are not enough pokeballs to catch the desired Pokemon')
    }
    
    

    //and dont return anything
}

game.catchPokemon(pokemon[130])

console.log('answer 19:', game)

/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/

const capitalizeTheFirstLetter = str => {
   
    let capitalize =  str.charAt(0).toUpperCase() + str.slice(1);
    return capitalize
} 

game.catchPokemon = function(pokemonName) {
    //once we have the user input we can manipulate it and make all letter small
    let lowerCaseNamePokemon = pokemonName.toLowerCase()
    //then to match the one on the data.js file we will capitalize the first letter
    let pokemonObj = pokemon.find(pok => pok.name === capitalizeTheFirstLetter(lowerCaseNamePokemon))

    if(pokemonObj) {
        if (game.items[1].quantity >= 1) {

            //add the pokemonObj to the game.party array
            game.party.push(pokemonObj)
        
            //reduce pokeball
            game.items.forEach( item => {
        
                //its ok the have a negative pokeball
                if(item.name === 'pokeball') item.quantity--
            })
        
            if(game.party.length > 6) {
                
                //sort then reassign in descending order
                game.party = game.party.sort((pokemonx, pokemony) =>  pokemony.hp - pokemonx.hp)
                //remove the lowest hp pokemon considered to be the weakest
                game.collection.push(game.party.pop())
            }
        } else {
            console.log('there are not enough pokeballs to catch the desired Pokemon')
        }
    }
    else {
        console.log('the selected Pokemon does not exist')
    }

    //and dont return anything
}
game.catchPokemon('PikAcHu')
game.catchPokemon('Pidgeot')

console.log(game)

/*
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/

const groupedByType = (any_pokemon_array) => {
    return any_pokemon_array.reduce((acc, currentPokemon) => {
        const type = currentPokemon.type;
        
        //initialize the accumulator if it hasnt been 
        if (!acc[type]) {
          acc[type] = [];
        }
        //if it exist then simply put the current pokemon
        acc[type].push(currentPokemon);
        
        return acc;
      }, {});
}



console.dir(groupedByType(pokemon))
