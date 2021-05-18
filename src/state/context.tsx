import React, {createContext, useReducer, useEffect, useState} from 'react'

import { reducer } from './reducer'
import { ContextProviderType, ProductType, StateType } from './types'

const localStorageData = JSON.parse(localStorage.getItem('cart') ||' {}')

const initialState = {
  products: [],
  cart: Object.keys(localStorageData).length === 0 && localStorageData.constructor === Object ? [] : localStorageData,
} 

export const Context = createContext<{
  state: StateType,
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null
});

const API = 'http://localhost:3000/products'

export const ContextProvider = ({children}: ContextProviderType) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(API)
        const responseData = await response.json()

        state.products = responseData
        setProducts(responseData)
      } catch(error) {
        console.log(error)
      }
    }

    localStorage.setItem('cart', JSON.stringify(state.cart))

    getProducts()
  },[state])

  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  )
}