import React from 'react';
// import { applyMiddleware, compose, createStore } from 'redux';
// import { Provider } from 'react-redux';
import { render } from 'react-dom';
// import createHistory from 'history/createBrowserHistory';
// import createSagaMiddleware from 'redux-saga';
// import rootReducer from 'reducers';
// import rootSaga from 'sagas';
import { ApolloProvider, Query } from 'react-apollo';
import ApolloClient, { gql } from 'apollo-boost';
// import Home from 'components/Home';
import Auth from 'components/Auth';
import App from 'components/App';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/',
  fetchOptions: {
    credentials: 'include'
  },
  request: operation => {
    const token = localStorage.getItem('authToken') || '';
    operation.setContext({
      headers: {
        Authorization: `JWT ${token}`
      }
    })
  },
  clientState: {
    defaults: {
      isLoggedIn: !!localStorage.getItem('authToken')
    }
  }
})
// const history = createHistory();
// const sagaMiddleware = createSagaMiddleware();

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   rootReducer,
//   composeEnhancer(
//     applyMiddleware(
//       sagaMiddleware,
//     ),
//   ),
// );
const IS_LOGGED_IN_QUERY = gql`
  query {
    isLoggedIn @client
  }
`
// sagaMiddleware.run(rootSaga);

render(
  <ApolloProvider client={client}>
    <Query query={IS_LOGGED_IN_QUERY}>
      {({ data }) => data.isLoggedIn ? <App/> : <Auth />}
    </Query>
    {/* <Provider store={store}>
      <App />
    </Provider> */}
  </ApolloProvider>,
  document.getElementById('root'),
);
