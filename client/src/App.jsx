import React, { useMemo, useEffect } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./Componentes/Home/Home";
import LandingPage from "./Componentes/LandingPage/LandingPage";
import UserProfile from "./Componentes/UserProfile/UserProfile";
import FormularioRegistro from "./Componentes/FormularioRegistro/FormularioRegistro";
import Login from "./Componentes/Login/Login";
import EditProfile from "./Componentes/EditProfile/EditProfile";
import CourseCardDetail from "./Componentes/CourseCardDetail/CourseCardDetail";
import ConfirmRegister from "./Componentes/ConfirmRegister/ConfirmRegister";
import PurchaseConfirm from './Componentes/PurchaseConfirm/PurchaseConfirm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/form" element={<FormularioRegistro />} />
          <Route path="/user" element={<Login />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/profile/edit/:id" element={<EditProfile />} />
          <Route exact path="/courses/id/:id" element={<CourseCardDetail />} />
          <Route path="/registerok" element={<ConfirmRegister />} />
          <Route path="/purchaseok" element={<PurchaseConfirm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
