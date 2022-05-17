import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./userProfile.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import MyPurchases from "../MyPurchases/MyPurchases";
import MyCoursesAlumn from "./../MyCoursesAlumn/MyCoursesAlumn";
import MyCoursesInstructor from "./../MyCoursesInstructor/MyCoursesInstructor";
import ProfileLateralBar from "../ProfileLateralBar/ProfileLateralBar";
import Error404 from "../Error404/Error404";

import AdminCourses from "../AdminCourses/AdminCourses";
import AdminSales from "../AdminSales/AdminSales";
import AdminReviews from "../AdminReviews/AdminReviews";
import AdminCategories from "../AdminCategories/AdminCategories";
import AdminUsers from "../AdminUsers/AdminUsers";
import AdminEarnings from "../AdminEarnings/AdminEarnings";
import MySalesInstructor from "../MySalesInstructor/MySalesInstructor";

import { getUserById, getAvatares, allUser } from "../../redux/actions/index";

import { useParams } from "react-router-dom";

export default function UserProfile() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserById(id));
    dispatch(getAvatares());
    dispatch(allUser());
  }, [dispatch]);

  const loggedUser = useSelector((state) => state.loggedUsers);
  const userDetail = useSelector((state) => state.userDetail);

  return (
    <div>
      {loggedUser.length > 0 ? (
        <div>
          <NavBar />
          <div className={styles.container}>
            <div>
              <h2>Mi Perfil</h2>
            </div>
            <div className={styles.totalProfile}>
              <div className={styles.profileDetail}>
                <ProfileLateralBar
                  name={userDetail.name}
                  id={userDetail.id}
                  email={userDetail.email}
                  categories={userDetail.categories}
                  image={userDetail.image}
                />
              </div>
              <div className={styles.cursesDetail}>
                {/* {userDetail.roles && userDetail.roles.filter((r) => r.tipo === "alumno").length >
                  0 && <div>
                  <MyCoursesAlumn user={userDetail} />
                  <MyPurchases user={userDetail} />
                  </div>
                  } */}
                {userDetail.roles &&
                  userDetail.roles.filter((r) => r.tipo === "instructor")
                    .length > 0 && (
                    <div>
                      <MyCoursesInstructor user={userDetail} />
                      <MySalesInstructor user={userDetail} />
                    </div>
                  )}

                {userDetail.roles &&
                  userDetail.roles.filter((r) => r.tipo === "alumno").length >
                    0 && (
                    <div>
                      <MyCoursesAlumn user={userDetail} />
                      <MyPurchases user={userDetail} />
                    </div>
                  )}
             
                {userDetail.roles &&
                  userDetail.roles.filter((r) => r.tipo === "admin").length >
                    0 && (
                    <div className={styles.admin}>
                      <div className={styles.left}>
                        <AdminSales />
                        <AdminEarnings />
                        <AdminCourses />
                      </div>
                      <div className={styles.right}>
                        <AdminUsers />
                        <AdminReviews />
                        <AdminCategories />
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <div>
          <Error404 />
        </div>
      )}
    </div>
  );
}
