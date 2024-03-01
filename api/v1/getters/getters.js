import psp from "prompt-sync-plus"

const prompt = psp({ sigint: true })

export const getSearchType = () => {
  let method = prompt(
    `How would you like to search for Pokemon? \nPress 1 to search for a pokemon by ID \nPress 2 to search for a pokemon by name. \nType h for help.\n`
  )
  if (method == 1) {
    return "id"
  } else if (method == 2) {
    return "name"
  } else if (method == "h") {
    console.log("how can I help?")
    process.exit(0)
  } else {
    console.log(`Invalid input. Please enter 1 or 2.`)
    method = prompt(
      `How would you like to search for Pokemon? \nPress 1 to search for a pokemon by ID \nPress 2 to search for a pokemon by name. \nType h for help.\n`
    )
    getSearchType()
  }
  return method
}

export const getSearchValue = (searchType) => {
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

export const getAnotherSearch = () => {
  console.log("Would you like to search for another Pokemon? Y/N")
  const response = prompt(`> `)
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

export const getUserQuery = () => {
  const searchType = getSearchType()
  const searchValue = getSearchValue(searchType)
  return { searchType, searchValue }
}
