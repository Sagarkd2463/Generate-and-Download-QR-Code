import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import QrCode from './Components/QrCode';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path='/' Component={QrCode}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
