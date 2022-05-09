import React from "react";
import { useSelector } from "react-redux";

import NavBar from "../NavBar/NavBar";
import Error404 from "../Error404/Error404";

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
          <h2>ESTE ES EL PANEL DE ADMINISTRADOR</h2>
        </div>
      ) : (
        <Error404 />
      )}
    </div>
  );
}

export default AdminPanel;
