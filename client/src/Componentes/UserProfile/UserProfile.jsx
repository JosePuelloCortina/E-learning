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
  const user = useSelector((state) => state.user);
  const loggedUser = useSelector((state) => state.loggedUsers);
  console.log(user);
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
                  name={user.name}
                  id={user.id}
                  email={user.email}
                />
              </div>
              <div className={styles.cursesDetail}>
                <MyCoursesAlumn user={user} />
                <MyCoursesInstructor user={user} />
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
