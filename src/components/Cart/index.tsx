import React, { useContext } from 'react'

import * as S from './styles'

import { Context } from '../../state/context'
import { Actions } from '../../state/types'

import ProductCart from '../ProductCart'

import convertToMoney from '../../utils/convertToMoney'

type CartProps = {
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Cart = ({ setCartIsOpen }: CartProps) => {
  const { state, dispatch } = useContext(Context)

  const handleCloseCart = () => {
    setCartIsOpen((cartIsOpen) => !cartIsOpen)
  }

  const calculatePurchaseAmount = () => {
    const purchaseAmount = state.cart.reduce((acc, product) => {
      return acc + product.price * product.quantity
    }, 0)

    return convertToMoney(purchaseAmount)
  }

  const purchaseProducts = () => {
    if (state.cart.length < 1) {
      window.alert('Seu carrinho está vazio!')
      return
    }

    window.alert(`Compra confirmada, valor total ${calculatePurchaseAmount()}`)

    dispatch({ type: Actions.cleanCart })
  }

  const cleanCart = () => {
    dispatch({ type: Actions.cleanCart })
  }

  return (
    <S.Wrapper>
      <S.CloseCart onClick={handleCloseCart}>X</S.CloseCart>

      <S.Title>Seu Carrinho</S.Title>

      {state.cart.length > 0 ? (
        state.cart.map((product) => (
          <ProductCart
            key={product.name}
            name={product.name}
            image={product.image}
            price={product.price}
            quantity={product.quantity}
          />
        ))
      ) : (
        <S.EmptyCart>Nenhum produto no carrinho...</S.EmptyCart>
      )}

      <S.TotalPrice>Valor Total - {calculatePurchaseAmount()}</S.TotalPrice>

      <S.ButtonsWrapper>
        <S.CleanCartButton onClick={cleanCart}>Limpar</S.CleanCartButton>
        <S.PurchaseButton onClick={purchaseProducts}>Comprar</S.PurchaseButton>
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}

export default Cart
