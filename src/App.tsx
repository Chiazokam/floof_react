import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { StylesProvider } from '@material-ui/core/styles';
import Landing from './components/Landing/Landing';
import './App.module.css';

const queryClient = new QueryClient();

function App() {
  return (
    <StylesProvider injectFirst>
      <QueryClientProvider client={queryClient}>
        <Landing />
      </QueryClientProvider>
    </StylesProvider>
  );
}

export default App;
