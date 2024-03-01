import { findPokemon } from "./api/v1/dao/pokemonDAO.js"
import {
  getAnotherSearch,
  getUserQuery,
  getPokemonInfo,
} from "./api/v1/getters/getters.js"

const app = async () => {
  try {
    const { searchType, searchValue } = getUserQuery()
    const pokemon = await findPokemon(searchType, searchValue)
    getPokemonInfo(pokemon)
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }

  getAnotherSearch() && app()
}

console.log(`\nWelcome to PokéCLI!\n`)

app()
