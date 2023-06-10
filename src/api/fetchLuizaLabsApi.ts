const BASE_LUIZA_LABS_URL: string = import.meta.env.VITE_REACT_APP_LUIZA_LABS_API_DEVELOPMENT

const pageMock = {
  "meta": {
    "page_number": 1,
    "page_size": 100
  },
  "products": [
    {
      "price": 1699.0,
      "image": "http://challenge-api.luizalabs.com/images/1bf0f365-fbdd-4e21-9786-da459d78dd1f.jpg",
      "brand": "b\u00e9b\u00e9 confort",
      "id": "1bf0f365-fbdd-4e21-9786-da459d78dd1f",
      "title": "Cadeira para Auto Iseos B\u00e9b\u00e9 Confort Earth Brown"
    },
    {
      "price": 1149.0,
      "image": "http://challenge-api.luizalabs.com/images/958ec015-cfcf-258d-c6df-1721de0ab6ea.jpg",
      "brand": "b\u00e9b\u00e9 confort",
      "id": "958ec015-cfcf-258d-c6df-1721de0ab6ea",
      "title": "Mois\u00e9s Dorel Windoo 1529"
    },
    {
      "price": 1149.0,
      "image": "http://challenge-api.luizalabs.com/images/6a512e6c-6627-d286-5d18-583558359ab6.jpg",
      "brand": "b\u00e9b\u00e9 confort",
      "id": "6a512e6c-6627-d286-5d18-583558359ab6",
      "title": "Mois\u00e9s Dorel Windoo 1529"
    },
    {
      "price": 1999.0,
      "image": "http://challenge-api.luizalabs.com/images/4bd442b1-4a7d-2475-be97-a7b22a08a024.jpg",
      "brand": "b\u00e9b\u00e9 confort",
      "id": "4bd442b1-4a7d-2475-be97-a7b22a08a024",
      "title": "Cadeira para Auto Axiss B\u00e9b\u00e9 Confort Robin Red"
    },
    {
      "price": 160.69,
      "image": "http://challenge-api.luizalabs.com/images/77be5ad3-fa87-d8a0-9433-5dbcc3152fac.jpg",
      "brand": "inovox",
      "id": "77be5ad3-fa87-d8a0-9433-5dbcc3152fac",
      "title": "Farol Lado Esquerdo para Monza 88/90"
    }
  ]
}

const productMock = { 
  "price": 1999.0, 
  "image": "http://challenge-api.luizalabs.com/images/4bd442b1-4a7d-2475-be97-a7b22a08a024.jpg", 
  "brand": "b\u00e9b\u00e9 confort", 
  "id": "4bd442b1-4a7d-2475-be97-a7b22a08a024", 
  "title": "Cadeira para Auto Axiss B\u00e9b\u00e9 Confort Robin Red" 
}

export const fetchPageProducts = async (pageNumber: number) => {
  const URL = `${BASE_LUIZA_LABS_URL}/?page=${pageNumber}`;

  try {
    // const response = await fetch(URL);
    // const data = response.data;
    const error = false;

    return { data: pageMock };
  } catch (error) {
    return { response: null, data: null, error: true };
  }

};

export const fetchProductById = async (productId: string) => {
  const URL = `${BASE_LUIZA_LABS_URL}/${productId}/`;

  try {
    // const response = await fetch(URL);
    // const data = response.data;
    const error = false;

    return { data: productMock };
  } catch (error) {
    return { response: null, data: null, error: true };
  }
};