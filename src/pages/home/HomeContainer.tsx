import React, { useState, useEffect } from 'react'
import { faker } from '@faker-js/faker';

import {
  createCustomer,
  getAllProductsByUserId,
  getAllCustomers,
} from '../../api/fetchApi'

import {
  fetchProductById,
  fetchPageProducts
} from '../../api/fetchLuizaLabsApi'

// Components
import Home  from './Home'

// Models

// Prototypes

type HomeContainerProps = {}

export const HomeContainer = (props: HomeContainerProps) => {

  const [customers, setCustomers] =  useState<any>(null)
  const [products, setProducts] = useState<any>(null)
  const [pageProducts, setPageProducts] = useState<any>(null)

  const getCustomerList = async (): Promise<void> => {
    const customerList = (await getAllCustomers()).data
    setCustomers(customerList)
  }

  const getProductListByCustomerId = async (customerId: number): Promise<void> => {
    const productList = (await getAllProductsByUserId(customerId)).data
    setCustomers(productList)
  }

  const getPageProducts = async (pageId: number): Promise<void> => {
    const productsPage = (await fetchPageProducts(pageId)).data
    setPageProducts(productsPage?.products)
  }

  const createCustomerList = async (name: string): Promise<void> => {
    const randomEmail = faker.internet.email({firstName: name});

    const formatedData = { name,  email: randomEmail }

    await createCustomer(formatedData)
    getCustomerList()
  }

  const createListProductByCustomer = async (data: any): Promise<void> => {
    console.log(data)
  }

  useEffect( () => {
    if(!customers)
      getCustomerList()

    if(!pageProducts)
      getPageProducts(1)
  }, [])

  return (
    <Home
      customers={customers}
      pageProducts={pageProducts}
      onAddCustomer={createCustomerList}
      onAddProduct={createListProductByCustomer}
    />
  )
}