import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'containers/AppContainer';
import { App } from 'components/App';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <AppContainer>
      <App />
    </AppContainer>
  </React.StrictMode>,
  document.getElementById('root')
);
