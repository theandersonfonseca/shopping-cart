import styled, {css} from 'styled-components'

export const Container = styled.div`
  ${({theme}) => css`
    width: 120rem;
    max-width: 100%;
    margin: 0 auto;
    height: 100%;
    padding: ${theme.spacings.xsmall};  
  `}
`
export default Container
