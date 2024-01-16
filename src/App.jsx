import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Uniformes from './components/Uniformes';
import CardDetails from './components/Cards/CardDetails';
import { MiContextoProvider } from './components/context/useContext.jsx';

function App() {
  return (
    <MiContextoProvider>
      <Routes>
        <Route path='/uniformes' element={<Uniformes />} />
        <Route path='/uniformes/:id' element={<CardDetails />} />
      </Routes>
    </MiContextoProvider>
  );
}

export default App;
