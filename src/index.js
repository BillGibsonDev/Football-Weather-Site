import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// router
import { BrowserRouter } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from "./redux/reducers/index.js";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [
  thunk,
];

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(...middleware),
));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);

