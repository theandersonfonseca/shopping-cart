export type StateType = {
  products: ProductType[],
  cart: ProductCartType[],
}

export type ProductType = {
  id: number
  image: string
  name: string
  price: number 
}

export type ProductCartType = {
  image: string
  name: string
  price: number 
  quantity: number
}

export type ContextProviderType = {
  children: React.ReactNode
}

export enum Actions {
  addProductInCart = 'ADD_PRODUCT_IN_CART',
  removeProductFromCart = 'REMOVE_PRODUCT_FROM_CART',
  increaseProductQuantity = 'INCREASE_PRODUCT_QUANTITY',
  decreaseProductQuantity = 'DECREASE_PRODUCT_QUANTITY',
  cleanCart = 'CLEAN_CART'
}

export type ActionsType = 
  | {type: Actions.addProductInCart; payload: {name: string, price: number, image: string}}
  | {type: Actions.removeProductFromCart; payload: string}
  | {type: Actions.increaseProductQuantity; payload: string}
  | {type: Actions.decreaseProductQuantity; payload: string}
  | {type: Actions.cleanCart};