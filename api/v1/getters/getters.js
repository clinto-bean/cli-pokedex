import psp from "prompt-sync-plus"

const prompt = psp({ sigint: true })

const getInput = () => {
  const value = prompt(`> `)
  console.log(`\n`)
  return value
}

export const getSearchType = () => {
  console.log(
    `How would you like to search for Pokemon? \nPress 1 to search for a pokemon by ID \nPress 2 to search for a pokemon by name. \nType h for help.\n\n`
  )
  let method = getInput()
  if (method == 1) {
    return "ID"
  } else if (method == 2) {
    return "name"
  } else if (method == "h") {
    console.log("work in progress")
    getSearchType()
  } else {
    console.log(`Invalid input. Try again.`)
    getSearchType()
  }
  return method
}

export const getSearchValue = (searchType) => {
  console.log(
    `Enter the ${searchType} of the Pokemon you'd like to search for.\n`
  )
  return getInput()
}

export const getAnotherSearch = () => {
  console.log(`\nWould you like to search for another Pokemon? Y/N\n`)
  const response = getInput()
  response.toLowerCase()
  if (response === ("y" || "Y")) {
    return true
  } else if (response === ("n" || "N")) {
    console.log(`Goodbye, thank you for using our Pokedex!\n`)
    return false
  } else {
    console.log(`Invalid input. Please enter Y or N.\n`)
    getAnotherSearch()
  }
}

export const getUserQuery = () => {
  const searchType = getSearchType()
  const searchValue = getSearchValue(searchType)
  return { searchType, searchValue }
}

export const getPokemonInfo = (pokemon) => {
  if (!pokemon) {
    return console.log(
      `Pokemon not found. Please try again with a different search term.`
    )
  } else {
    const getTypes = (pokemon) => {
      let types = []
      for (let type of pokemon.types) {
        types.push(type.type.name)
      }
      return types.join(" and ")
    }

    const pokemonName =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

    console.log(
      `====================================\n\nPokemon found! Here's the information:\n\n${pokemonName} (#${
        pokemon.id
      }) are ${getTypes(pokemon)} type Pokemon. ${pokemonName} are ${
        pokemon.height * 10
      }cm tall and weigh ${
        pokemon.weight / 10
      }kg on average.\n\n====================================\n`
    )
  }
}
