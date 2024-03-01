import { findPokemon } from "./api/v1/dao/pokemonDAO.js"
import { getAnotherSearch, getUserQuery } from "./api/v1/getters/getters.js"

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
