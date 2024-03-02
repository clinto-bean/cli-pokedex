export const findPokemon = async (searchType, searchValue) => {
  if (searchType === "name" && !isNaN(searchValue)) {
    throw new Error("Invalid input. Please enter a valid name.")
  }
  if (searchType === "id" && isNaN(searchValue)) {
    throw new Error("Invalid input. Please enter a valid ID.")
  }

  const baseURL = "https://pokeapi.co/api/v2/pokemon"

  const url = `${baseURL}/${searchValue}`

  const pokemon = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json())

  return pokemon
}
