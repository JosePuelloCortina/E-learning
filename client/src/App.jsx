import React, { useMemo, useEffect } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from './Componentes/Home/Home';
import LandingPage from './Componentes/LandingPage/LandingPage';
import UserProfile from './Componentes/UserProfile/UserProfile';
import FormularioRegistro from './Componentes/FormularioRegistro/FormularioRegistro';
import Login from './Componentes/Login/Login';


function App() {
  
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route exact path = '/' element={<LandingPage/>} />
            <Route path = '/home' element={<Home/>} />
            <Route path = '/profile' element={<UserProfile/>} />
            <Route path = '/form' element={<FormularioRegistro/>} />
            <Route path = '/user' element={<Login/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
