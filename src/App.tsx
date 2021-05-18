import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

import Header from './components/Header';
import Products from './components/Products';

import { ContextProvider } from './state/context';

const App = () => (
  <ThemeProvider theme={theme}>
    <ContextProvider>
      <Header/>
      <Products/>
    </ContextProvider>
    <GlobalStyle/>
  </ThemeProvider>
);

export default App;
