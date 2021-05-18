import styled, {css} from 'styled-components'

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 25rem;
    margin-bottom: ${theme.font.sizes.medium};
  `}
`

export const Image = styled.img`
  ${({theme}) => css`
    width: 6rem;
    height: 6rem;
    margin-right: ${theme.spacings.small};
  `}
`

export const Content = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: ${theme.spacings.medium};
  `}
`

export const Name = styled.p`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
  `}
`

export const Price = styled.span`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    
  `}
`

export const RemoveButton = styled.button`
  ${({theme}) => css`
    background: transparent;
    color: ${theme.colors.secondary};
    text-transform: uppercase;
    margin-top: ${theme.spacings.xxsmall};
  `}
`

export const ProductQuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
`

export const ProductQuantity = styled.span`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
  `}
`

const ProductQuantityBase = styled.button`
  ${({theme}) => css`
    background: transparent;
    color: ${theme.colors.secondary};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
  `}
`

export const IncreaseProductQuantity = styled(ProductQuantityBase)`
  transform: rotate(90deg); 
`

export const DecreaseProductQuantity = styled(ProductQuantityBase)`
  transform: rotate(90deg); 
`







