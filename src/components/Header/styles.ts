import styled, {css} from 'styled-components'
import {Cart} from '@styled-icons/bootstrap'

export const Wrapper = styled.header`
  ${({theme}) => css`
    height: 10rem;
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
  `}
`

export const Content = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between;
  height: 100%;
`

export const Title = styled.h1`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.xxlarge};     
    text-transform: uppercase;
    color: ${theme.colors.white};
  `}
`

export const CartIconWrapper = styled.div`
  position: relative;
`

export const CartIcon = styled(Cart)`
  width: 2.5rem  ;
  cursor: pointer;
`

export const Badge = styled.span`
  ${({theme}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    top: 0;
    right: -1rem;
    padding: ${theme.spacings.xxxsmall};
    border-radius: ${theme.border.circle};
    background: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
  `}
`