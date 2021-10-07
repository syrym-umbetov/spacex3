import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import Routing from './routes/index';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
      <Routing />
  </ApolloProvider>
);

export default App;
