import { useContext } from 'react'

import * as S from './styles'

import { Actions, ProductCartType } from '../../state/types'
import { Context } from '../../state/context'
import convertToMoney from '../../utils/convertToMoney'

const ProductCart = ({ image, name, price, quantity }: ProductCartType) => {
  const { state, dispatch } = useContext(Context)

  const removeProduct = () => {
    dispatch({ type: Actions.removeProductFromCart, payload: name })
  }

  const increaseProduct = () => {
    dispatch({ type: Actions.increaseProductQuantity, payload: name })
  }

  const decreaseProduct = () => {
    const product = state.cart.find((p) => p.name === name)

    if (product?.quantity === 1) {
      dispatch({ type: Actions.removeProductFromCart, payload: name })
      return
    }

    dispatch({ type: Actions.decreaseProductQuantity, payload: name })
  }

  return (
    <S.Wrapper>
      <S.Image src={image} />

      <S.Content>
        <S.Name>{name}</S.Name>
        <S.Price>{convertToMoney(price)}</S.Price>

        <S.RemoveButton onClick={removeProduct}>Remover</S.RemoveButton>
      </S.Content>

      <S.ProductQuantityWrapper>
        <S.IncreaseProductQuantity onClick={increaseProduct}>
          {'<'}
        </S.IncreaseProductQuantity>

        <S.ProductQuantity>{quantity}</S.ProductQuantity>

        <S.DecreaseProductQuantity onClick={decreaseProduct}>
          {'>'}
        </S.DecreaseProductQuantity>
      </S.ProductQuantityWrapper>
    </S.Wrapper>
  )
}

export default ProductCart
