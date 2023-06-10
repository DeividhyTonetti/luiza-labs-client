// Load environment variables
const BASE_URL: string = import.meta.env.MODE === 'production' ?
  import.meta.env.VITE_REACT_APP_API_URL_PRODUCTION :
  import.meta.env.VITE_REACT_APP_API_DEVELOPMENT

type CreateUserProps = {
  name: string
  email: string
}

export const createCustomer = async ({ name, email}: CreateUserProps) => {
  const url = `${BASE_URL}/customers/`
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email })
  }

  try {
    const response = await fetch(url, requestOptions)
    const data = await response.json()
    const error = false

    return {response, data, error}
  } catch {
    return { response: null, data: null, error: true };
  }
}

export const createProduct = async (pokemonId: number | null, teamName: string | null) => {
  const url = `${BASE_URL}/addPokemon/`

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      pokemonId,
      teamName,
    })
  }

  try {
    const response = await fetch(url, requestOptions)
    const data = await response.json()
    const error = false

    return { response, data, error }
  } catch {
    return { response: null, data: null, error: true };
  }

}

export const getAllProductsByUserId = async (customerId: number) => {
  const url = `${BASE_URL}/getAllTeams/`

  try {
    const response = await fetch(url)
    const data = await response.json()
    const error = false

    return { response, data, error }
  } catch {
    return { response: null, data: null, error: true };
  }
}

export const getAllCustomers= async () => {
  const url = `${BASE_URL}/customers/`

  try {
    const response = await fetch(url)
    const data = await response.json()
    const error = false

    return { response, data, error }
  } catch {
    return { response: null, data: null, error: true };
  }
}

export const removeCustomer = async (teamId: string) => {
  const url = `${BASE_URL}/removePokemon/${teamId}`

  try {
    const response = await fetch(url, {
      method: 'DELETE'
    })
    const data = await response.json()
    const error = false

    return { response, data, error }
  } catch {
    return { response: null, data: null, error: true };
  }
}

export const removeProduct = async (teamName: string) => {
  const url = `${BASE_URL}/removeTeam/${teamName}`

  try {
    const response = await fetch(url, {
      method: 'DELETE'
    })
    const data = await response.json()
    const error = false
    
    return { response, data, error }
  } catch {
    return { response: null, data: null, error: true };
  }
}