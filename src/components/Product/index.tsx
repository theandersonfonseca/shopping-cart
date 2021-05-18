import { useContext, useEffect, useState } from 'react'

import * as S from './styles'

import { Context } from '../../state/context'
import { Actions } from '../../state/types'

import convertToMoney from '../../utils/convertToMoney'

export type ProductProps = {
  id: number;
  image: string
  name: string
  price: number 
  inCart: boolean
}

const Product = ({image, name, price}: ProductProps) => {
  const {state, dispatch} = useContext(Context)
  const [isInCart, setIsInCart] = useState(false)

  const addProductInCart = () => {
    dispatch({type: Actions.addProductInCart, payload: {name, image, price}})
  }

  const removeProductFromCart = () => {
    dispatch({type: Actions.removeProductFromCart, payload: name})
  }

  useEffect(() => {
    if (state.cart.some(product => product.name === name)) {
      setIsInCart(true)
      return
    }

    setIsInCart(false)
  }, [name, state.cart])

  return (
    <S.Wrapper >
      <S.Image src={image}/>

      <S.Name>{name}</S.Name>

      <S.Content>
        <S.Price>{convertToMoney(price)}</S.Price>
        {isInCart ? 
          <S.IconCartRemove onClick={removeProductFromCart}/> : 
          <S.IconCartAdd onClick={addProductInCart}/>
        }
      </S.Content>
    </S.Wrapper>
  )
}   

export default Product
