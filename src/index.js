import { ColorModeScript, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript />
        <App />
      </ChakraProvider>
    </ReduxProvider>
  </StrictMode>
);
