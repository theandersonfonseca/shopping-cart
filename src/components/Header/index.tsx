import { useContext, useState } from 'react'

import * as S from './styles'

import { Context } from '../../state/context'

import Container from '../Container'
import Cart from '../Cart'

const Header = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false) 
  const {state} = useContext(Context)

  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <S.Title>Loja Tudo Barato</S.Title>

          <S.CartIconWrapper>   
            <S.CartIcon onClick={() => setCartIsOpen(!cartIsOpen)}/>
            <S.Badge>{state.cart.length}</S.Badge>
          </S.CartIconWrapper>
        </S.Content>
      </Container>

      {cartIsOpen && <Cart setCartIsOpen={setCartIsOpen}/>}
    </S.Wrapper>
  )
}

export default Header
