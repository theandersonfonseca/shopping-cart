import styled, {css} from 'styled-components'
import {CartPlus, CartDash} from '@styled-icons/bootstrap'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 20rem;
  height: 30rem;
`

export const Image = styled.img`
  width: 15rem;
`

export const Name = styled.h3`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.xxlarge};
    margin-bottom: ${theme.spacings.xxsmall};
    color: ${theme.colors.dark};
    text-align: center;
  `}
`

export const Content = styled.div`
  ${({theme}) => css`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: ${theme.spacings.xsmall};
    color: ${theme.colors.white};
  `}
`

export const Price = styled.span`
  ${({theme}) => css` 
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.small};
    background: ${theme.colors.primary}; 
    font-weight: ${theme.font.bold};
  `}
`

export const IconCartAdd = styled(CartPlus)`
  ${({theme}) => css` 
    width: ${theme.font.sizes.xxlarge};
    background: ${theme.colors.secondary};
    padding: ${theme.spacings.xxxsmall};
    border-radius: ${theme.border.radius};
    cursor: pointer;
  `}
`

export const IconCartRemove = styled(CartDash)`
  ${({theme}) => css` 
    width: ${theme.font.sizes.xxlarge};
    background: ${theme.colors.primary};
    padding: ${theme.spacings.xxxsmall};
    border-radius: ${theme.border.radius};
    cursor: pointer;
  `}
`

