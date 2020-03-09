import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../../redux/reducers';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

const ProviderMock = props => (
  <Provider store={store}>
      {props.children}
  </Provider>
);

export default ProviderMock;