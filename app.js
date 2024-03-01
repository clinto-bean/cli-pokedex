import { findPokemon } from "./api/v1/pokemonDAO.js"
import { getAnotherSearch, getUserQuery } from "./api/getters/getters.js"

console.log(`\nWelcome to PokéCLI!\n`)

const app = async () => {
  const { searchType, searchValue } = getUserQuery()
  await findPokemon(searchType, searchValue)
  const anotherSearch = getAnotherSearch()
  if (anotherSearch) {
    app()
  }
}

app()
