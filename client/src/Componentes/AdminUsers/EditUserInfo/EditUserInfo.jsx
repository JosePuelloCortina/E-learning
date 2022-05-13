import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../redux/actions";
import styles from "../EditUserInfo/EditUserInfo.module.css";

function EditUserInfo({ setEditInfo, editInfo, currentUser, setCurrentUser }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);

  const toggleEditInfo = () => {
    setEditInfo(!editInfo);
  };

  console.log(currentUser, "current user es");
  const user = users.find((u) => u.id === currentUser);
  console.log(user, "el user es");

  const [input, setInput] = useState({
    id: user.id,
    name: user.name,
    email: user.email,
    rol: user.roles[0].tipo,
    validated: user.validated,
    banned: user.banned,
  });

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    // setErrors(
    //   validate({
    //     ...input,
    //     [e.target.name]: e.target.value,
    //   })
    // );
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      window.confirm("¿Esta seguro que quiere editar este usuario?") === true
    ) {
      dispatch(updateUser(currentUser, input));
      alert("Usuario editado correctamente.");
      window.location.reload();
    }
  };

  return (
    <div className={styles.container}>
      <div onClick={toggleEditInfo} className={styles.overlay}></div>
      <div className={styles.content}>
        <button className={styles.closeEdit} onClick={toggleEditInfo}>
          CLOSE
        </button>
        <form className={styles.formEdit} onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInputChange}
          />
          <select name="rol" onChange={handleInputChange}>
            <option selected disabled>
              Rol
            </option>
            <option value="instructor">Instructor</option>
            <option value="alumno">Alumno</option>
            <option value="admin">Admin</option>
          </select>
          <select name="validated" onChange={handleInputChange}>
            <option selected disabled>
              Validated
            </option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <select name="banned" onChange={handleInputChange}>
            <option selected disabled>
              Banned
            </option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <button className={styles.submitFormBtn} type="submit">
            <span>Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditUserInfo;
