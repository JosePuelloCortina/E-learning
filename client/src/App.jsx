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
import ConfirmCourse from "./Componentes/ConfirmCourse/ConfirmCourse";
import ConfirmClass from "./Componentes/ConfirmClass/ConfirmClass";
import ConfirmEditClass from "./Componentes/ConfirmClass/ConfirmEditClass";
import ConfirmEditCourse from "./Componentes/ConfirmCourse/ConfirmEditCourse";
import PurchaseConfirm from "./Componentes/PurchaseConfirm/PurchaseConfirm";
import Error404 from "./Componentes/Error404/Error404";
import CourseLessons from "./Componentes/CourseLessons/CourseLessons";
import UserVerification from "./Componentes/UserVerification/UserVerification";
import Checkout from "./Componentes/Checkout/Checkout";
import FormCourses from "./Componentes/FormCourses/FormCourses";
import AdminPanel from "./Componentes/AdminPanel/AdminPanel";
import AdminPage from "./Componentes/AdminCategories/AdminPage";
import AdminUsersPage from "./Componentes/AdminUsers/AdminUsersPage";
import FormClass from "./Componentes/FormClass/FormClass";

import ChangePassword from "./Componentes/ChangePassword/ChangePassword";

import EditCourse from "./Componentes/EditCourse/EditCourse";
import EditClass from "./Componentes/EditClass/EditClass";
import AdminReviewsPage from "./Componentes/AdminReviews/AdminReviewsPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/form" element={<FormularioRegistro />} />
          <Route path="/formClass" element={<FormClass />} />
          <Route path="/formCourses" element={<FormCourses />} />
          <Route path="/editCourse/:id" element={<EditCourse />} />
          <Route path="/editClass/:id" element={<EditClass />} />
          <Route path="/user" element={<Login />} />
          <Route path="/user/verification" element={<UserVerification />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/profile/edit/:id" element={<EditProfile />} />
          <Route exact path="/courses/id/:id" element={<CourseCardDetail />} />
          <Route exact path="/registerok" element={<ConfirmRegister />} />
          <Route exact path="/Courseok" element={<ConfirmCourse />} />
          <Route exact path="/Classok" element={<ConfirmClass />} />
          <Route exact path="/ClassEditok" element={<ConfirmEditClass />} />
          <Route
            exact
            path="/CourseEditok/:id"
            element={<ConfirmEditCourse />}
          />
          <Route exact path="/purchaseok" element={<PurchaseConfirm />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/courselessons/:id" element={<CourseLessons />} />
          <Route path="/checkout/id/:id" element={<Checkout />} />
          <Route exact path="/admin" element={<AdminPanel />} />
          <Route exact path="/AdminPage" element={<AdminPage />} />

          <Route exact path="/adminReviews" element={<AdminReviewsPage/>} />

          <Route exact path="/AdminUsers" element={<AdminUsersPage />} />

          <Route
            exact
            path="/profile/edit/password/:id"
            element={<ChangePassword />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
