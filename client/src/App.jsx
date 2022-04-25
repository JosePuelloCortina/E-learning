import React, { useMemo, useEffect } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from './Componentes/Home/Home';





function App() {
  
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path = '/home' element={<Home/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
