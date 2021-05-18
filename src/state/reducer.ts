import { Actions, ActionsType, StateType } from './types'

export const reducer = (state: StateType, action: ActionsType) => {
  switch (action.type) {
    case Actions.addProductInCart:
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            image: action.payload.image,
            name: action.payload.name,
            price: action.payload.price,
            quantity: 1
          }
        ]
      }

    case Actions.removeProductFromCart:
      return {
        ...state,
        cart: state.cart.filter((product) => product.name !== action.payload)
      }

    case Actions.increaseProductQuantity:
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.name === action.payload) {
            return {
              ...product,
              quantity: product.quantity + 1
            }
          }

          return product
        })
      }

    case Actions.decreaseProductQuantity:
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.name === action.payload) {
            return {
              ...product,
              quantity: product.quantity - 1
            }
          }

          return product
        })
      }

    case Actions.cleanCart:
      return { ...state, cart: [] }

    default:
      return state
  }
}
