import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';

import theme from './settings/theme';
import {store, history} from './store/store';
import PublicRoutes from "./routers/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PublicRoutes history={history} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
