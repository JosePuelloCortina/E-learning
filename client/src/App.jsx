import React, { useMemo, useEffect } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from './Componentes/Home/Home';
import LandingPage from './Componentes/LandingPage/LandingPage';
import UserProfile from './Componentes/UserProfile/UserProfile';
import EditProfile from './Componentes/EditProfile/EditProfile';


function App() {
  
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route exact path = '/' element={<LandingPage/>} />
            <Route path = '/home' element={<Home/>} />
            <Route exact path = '/profile/:id' element={<UserProfile/>} />
            <Route path = '/profile/edit/:id' element={<EditProfile/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
