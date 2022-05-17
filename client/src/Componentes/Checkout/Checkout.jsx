import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./checkout.module.css";
import { useDispatch, useSelector } from "react-redux";
import Comprar from "../MercadoPago/Comprar";
import { getCoursesById } from "../../redux/actions";
import { Link, useParams, useNavigate } from "react-router-dom";

function Checkout() {
  const course = useSelector((state) => state.courseDetail);
  const loggedUser = useSelector((state) => state.loggedUsers);
  const idCourse = course.id;
  const [datos, setDatos] = useState({
    idUser: loggedUser[0],
    idCourse: idCourse,
    name: course.name,
    price: course.price,
  });
  const dispatch = useDispatch();
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCoursesById(id));
    axios
      .post(`/mercadopago`, datos)
      .then((data) => {
        setDatos(data.data);
        console.info("Contenido de data:", data);
      })
      .catch((err) => console.error(err));
  }, []);

  function handleBack() {
    const home = (window.location.href = "/home");
    window.reload(home);
  }

  return (
    <div className={styles.container}>
      {!datos ? (
        <div>
          <h2>Obteniendo datos del curso,</h2>
          <h2>por favor espere un momento..</h2>
          <br />
          <br />
          <h1>AkademIT</h1>
        </div>
      ) : (
        <>
          <h2>Estas a punto de adquirir el siguiente curso:</h2>
          <h1>AkademIT</h1>
          <table>
            <thead>
              <tr className={styles.items}>
                {/* <th className={styles.item}>Id</th> */}
                <th className={styles.item}>Curso</th>
                <th className={styles.item}>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.data} key={idCourse}>
                {/* <td className={styles.dataItem}>{idCourse}</td> */}
                <td className={styles.dataItem}>{course.name}</td>
                <td className={styles.dataItem}>$ {course.price}</td>
              </tr>
            </tbody>
          </table>
          {!open && (
            <button onClick={() => setOpen(true)}>
              Continuar con la compra
            </button>
          )}
          {open && <Comprar data={datos} />}

          <Link to="/home">
            <h3 onClick={() => handleBack()}>
              Cancelar compra y volver a Home
            </h3>
          </Link>
        </>
      )}
    </div>
  );
}

export default Checkout;
