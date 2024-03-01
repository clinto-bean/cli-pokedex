export const findPokemon = async (searchType, searchValue) => {
  const baseURL = "https://pokeapi.co/api/v2/pokemon"

  const url = `${baseURL}/${searchValue}`

  const pokemon = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json())

  if (!pokemon.abilities) {
    throw new Error("Pokemon not found")
  }

  if (isNaN(searchValue)) {
    console.log(`Found ${pokemon.name}! Its ID is ${pokemon.id}`)
  } else if (!isNaN(searchValue)) {
    console.log(
      `Found Pokemon with ID ${pokemon.id}! Its name is ${pokemon.name}`
    )
  }
}
