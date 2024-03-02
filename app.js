import { findPokemon } from "./api/v1/dao/pokemonDAO.js"
import {
  getAnotherSearch,
  getUserQuery,
  getPokemonInfo,
} from "./api/v1/getters/getters.js"

console.log(`\nWelcome to PokéCLI!\n`)

const app = async () => {
  try {
    const { searchType, searchValue } = getUserQuery()
    const pokemon = await findPokemon(searchType, searchValue)
    getPokemonInfo(pokemon)
  } catch (error) {
    console.log(
      `No Pokemon was found with the parameters provided, please try again.\n${error.message}\n`
    )
  }

  getAnotherSearch() && app()
}

app()
