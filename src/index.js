import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import ShowStore from './stores/ShowStore';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-design-icons/iconfont/material-icons.css';
import registerServiceWorker from './registerServiceWorker';

const Root = (
  <Provider ShowStore={ShowStore}>
    <App/>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
