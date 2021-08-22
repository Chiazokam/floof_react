import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Landing from './components/Landing/Landing';
import './App.module.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Landing />
    </QueryClientProvider>
  );
}

export default App;
