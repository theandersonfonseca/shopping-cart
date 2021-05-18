import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
  `}
`

export const Content = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    justify-items: center;
    gap: ${theme.spacings.medium};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    margin-bottom: ${theme.spacings.large};
    color: ${theme.colors.dark};
    text-transform: uppercase;
    text-align: center;
  `}
`
