import React from "react";
import { useSelector } from "react-redux";
import styles from "./adminPanel.module.css";
import NavBar from "../NavBar/NavBar";
import Error404 from "../Error404/Error404";
// import AdminSales from "../AdminSales/AdminSales";
// import AdminCategories from "../AdminCategories/AdminCategories";

// import AdminUsers from "../AdminUsers/AdminUsers";

// import AdminCourses from "../AdminCourses/AdminCourses";

// import AdminReviews from "../AdminReviews/AdminReviews";
// import ProfileLateralBar from './../ProfileLateralBar/ProfileLateralBar';

function AdminPanel() {
  const loggedUser = useSelector((state) => state.loggedUsers);

  const user = useSelector((state) => state.userDetail);
  return (
    <div>
      {loggedUser.length > 0 &&
      Object.keys(user).length > 0 &&
      user.roles.filter((r) => r.tipo === "admin").length > 0 ? (
        <div>
          <NavBar></NavBar>
          <div className={styles.container}>
            <div className={styles.left}>
              {/* <AdminSales/>
              <AdminCategories/>
              <AdminReviews/> */}
            </div>
            <div className={styles.center}>


              {/* <AdminUsers/> */}
            
            </div>
            <div className={styles.right}>

              {/* <AdminCourses/> */}

            </div>
            <div className={styles.right}></div>
          </div>
        </div>
      ) : (
        <Error404 />
      )}
    </div>
  );
}

export default AdminPanel;
