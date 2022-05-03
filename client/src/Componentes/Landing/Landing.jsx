// import { useEffect } from "react";
import React  from "react";

import { LinktoHome, ImageFondo, Contenedor } from '../../styles/landing'
import fondo from "../../activos/fondo_4a.jpg";
// import { getAllPokemons } from "../../redux/actions/actions";

// import { useDispatch } from "react-redux";



export const Landing = () => {

//   const dispatch = useDispatch()

//  useEffect(() => {
//     dispatch(getAllPokemons())
//   }, [])


  return (

    <div>

 
      <Contenedor>
        
      <ImageFondo src={fondo} alt="fondito" />
      <LinktoHome to="/home"> INGRESAR </LinktoHome>

</Contenedor>

    </div>



  )
};

export default Landing;