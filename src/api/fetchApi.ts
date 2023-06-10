// Load environment variables
const BASE_URL: string = import.meta.env.MODE === 'production' ?
  import.meta.env.VITE_REACT_APP_API_URL_PRODUCTION :
  import.meta.env.VITE_REACT_APP_API_DEVELOPMENT

type CreateUserProps = {
  name: string
  email: string
}

export const createCustomer = async ({ name, email}: CreateUserProps) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email })
  }

  let response
  let data
  let error

  try {
    response = await fetch(`${BASE_URL}/customers/`, requestOptions)
    data = await response.json()
    error = false
  } catch {
    data = null
    error = true
  }

  return { response, data, error }
}

export const createProduct = async (pokemonId: number | null, teamName: string | null) => {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      pokemonId,
      teamName,
    })
  }

  let response
  let data
  let error

  try {
    response = await fetch(`${BASE_URL}/addPokemon/`, requestOptions)
    data = await response.json()
    error = false
  } catch {
    data = null
    error = true
  }

  return { response, data, error }
}

export const getAllProductsByUserId = async (customerId: number) => {

  let response
  let data: any | null
  let error

  try {
    response = await fetch(`${BASE_URL}/getAllTeams/`)
    data = await response.json()
    error = false
  } catch {
    data = null
    error = true
  }

  return { response, data, error }
}

export const getAllCustomers= async () => {

  let response
  let data: any | null
  let error

  try {
    response = await fetch(`${BASE_URL}/customers/`)
    data = await response.json()
    error = false
  } catch {
    data = null
    error = true
  }

  return { response, data, error }
}

export const removeCustomer = async (teamId: string) => {

  let response
  let data: any | null
  let error

  try {
    response = await fetch(`${BASE_URL}/removePokemon/${teamId}`, {
      method: 'DELETE'
    })
    data = await response.json()
    error = false
  } catch {
    data = null
    error = true
  }

  return { response, data, error }
}

export const removeProduct = async (teamName: string) => {

  let response
  let data: any | null
  let error

  try {
    response = await fetch(`${BASE_URL}/removeTeam/${teamName}`, {
      method: 'DELETE'
    })
    data = await response.json()
    error = false
  } catch {
    data = null
    error = true
  }

  return { response, data, error }
}