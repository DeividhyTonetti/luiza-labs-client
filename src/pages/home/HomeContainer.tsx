import React, { useState, useEffect } from 'react'
import { faker } from '@faker-js/faker';

import {
  createCustomer,
  getAllProductsByUserId,
  getAllCustomers,
} from '../../api/fetchApi'

// Components
import Home  from './Home'

// Models

// Prototypes
type PokemonInitialListProps = {
  name: string
  url: string
}

type HomeContainerProps = {}

export const HomeContainer = (props: HomeContainerProps) => {

  const [customers, setCustomers] =  useState<any>(null)
  const [products, setProducts] = useState<any>(null)

  const getCustomerList = async (): Promise<void> => {
    const customerList = (await getAllCustomers()).data
    setCustomers(customerList)
  }

  const getProductListByCustomerId = async (customerId: number): Promise<void> => {
    const productList = (await getAllProductsByUserId(customerId)).data
    setCustomers(productList)
  }

  const createCustomerList = async (name: string): Promise<any> => {
    const randomEmail = faker.internet.email({firstName: name});

    const formatedData = { name,  email: randomEmail }

    await createCustomer(formatedData)
    getCustomerList()
  }

  useEffect( () => {
    if(!customers)
      getCustomerList()
  }, [])

  return (
    <Home
      customers={customers}
      onAddCustomer={createCustomerList}
    />
  )
}