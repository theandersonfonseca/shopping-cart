import { useContext} from 'react'

import * as S from './styles'

import Product from '../Product'
import Container from '../Container'

import { Context } from '../../state/context'
import { ProductType } from '../../state/types'

const Products = () => {
  const {state} = useContext(Context)

  return (
    <Container>
      <S.Wrapper>
        <S.Title>Nossos Produtos</S.Title>

        <S.Content>
          {state.products.map((product: ProductType) => (
            <Product  
              key={product.id} 
              id={product.id} 
              image={product.image} 
              name={product.name} 
              price={product.price}
              inCart={product.inCart}
            />
          ))}
        </S.Content>
      </S.Wrapper>
    </Container>
  )
}

export default Products
