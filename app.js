import { getPokemon } from "./api/v1/pokemonDAO.js"
import psp from "prompt-sync-plus"

const prompt = psp({ sigint: true })

console.log("Welcome to the CLI Pokedex!")

const method = prompt(
  `How would you like to search for Pokemon? \nPress 1 to search for a pokemon by ID \nPress 2 to search for a pokemon by name. \nType h for help.\n`
)

const getSearchType = () => {
  if (method == 1) {
    return "id"
  } else if (method == 2) {
    return "name"
  } else if (method == "h") {
    console.log("how can I help?")
    process.exit(0)
  } else {
    throw new Error("Invalid input. Please enter 1 or 2.")
  }
}

const getSearchValue = (searchType) => {
  if (searchType === "id") {
    const value = prompt(
      `Enter the ID of the Pokemon you want to search for: \n`
    )
    if (isNaN(value)) {
      console.log(`Invalid input. Please enter a number.`)
      getSearchValue(searchType)
    }
    return value
  } else if (searchType === "name") {
    const value = prompt(
      "Enter the name of the Pokemon you want to search for: "
    )
    return value
  }
}

const getAnotherSearch = () => {
  const response = prompt(
    "Would you like to search for another Pokemon? (Y/N): "
  )
  if (response === "Y" || response === "y") {
    return true
  } else if (response === "n" || response === "N") {
    console.log("Goodbye, thank you for using our Pokedex!")
    return false
  } else {
    console.log("Invalid input. Please enter Y or N.")
    getAnotherSearch()
  }
}

const getUserQuery = () => {
  const searchType = getSearchType()
  const searchValue = getSearchValue(searchType)
  return { searchType, searchValue }
}

let running = true

const app = async () => {
  const { searchType, searchValue } = getUserQuery()
  await getPokemon(searchType, searchValue)

  let anotherSearch = getAnotherSearch()

  if (anotherSearch) {
    app()
  } else {
    console.log("Goodbye, thank you for using our Pokedex!")
    running = false
  }
}

app()
