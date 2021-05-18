import styled, {css, keyframes} from 'styled-components'

export const Wrapper = styled.div`
  ${({theme}) => css`
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    padding: ${theme.spacings.medium};
    background: ${theme.colors.dark};  
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${WrapperAnimation} 1s;
  `}
`

const WrapperAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const CloseCart = styled.span`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: ${theme.spacings.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.secondary};
    cursor: pointer; 
    align-self: flex-start;
  `} 
`

export const Title = styled.h3`
  ${({theme}) => css`
    margin-bottom: ${theme.spacings.small};
    font-size: ${theme.font.sizes.xlarge};
  `} 
`

export const TotalPrice = styled.span`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.large};
    font-size: ${theme.font.bold};
    margin-bottom: ${theme.spacings.small};
    margin-top: ${theme.spacings.large};
  `} 
` 

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Button = styled.button`
  ${({theme}) => css` 
    padding: ${theme.spacings.xxsmall};
    text-transform: uppercase;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
  `}
`

export const CleanCartButton = styled(Button)`
  ${({theme}) => css`
    background: ${theme.colors.secondary};
  `}
`

export const PurchaseButton = styled(Button)`
  ${({theme}) => css`
    background: ${theme.colors.primary};
  `}
`
export const EmptyCart = styled.p`
  ${({theme}) => css`
    min-width: 25rem;
    font-size: ${theme.font.sizes.small};
  `}
`