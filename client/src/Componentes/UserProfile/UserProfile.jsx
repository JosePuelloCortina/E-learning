import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./userProfile.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import MyCoursesAlumn from "./../MyCoursesAlumn/MyCoursesAlumn";
import MyCoursesInstructor from "./../MyCoursesInstructor/MyCoursesInstructor";
import ProfileLateralBar from "../ProfileLateralBar/ProfileLateralBar";
import Error404 from "../Error404/Error404";
import { getUserById } from "../../redux/actions/index";
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const dispatch = useDispatch();
  const { id } = useParams();



  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

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

                 
                />
              </div>
              <div className={styles.cursesDetail}>
                <MyCoursesAlumn user={userDetail} />
                <MyCoursesInstructor user={userDetail} />
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
