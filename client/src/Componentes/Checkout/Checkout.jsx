import React, { useEffect, useState } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import Comprar from '../MercadoPago/Comprar'
import { getCoursesById } from '../../redux/actions'
import { useParams } from "react-router-dom";


function Checkout() {
    const course = useSelector((state) => state.courseDetail);
    const idCourse = course.id;
    const [datos, setDatos] = useState({
        idCourse:idCourse,
        name:course.name,
        price:course.price
    })
    const dispatch = useDispatch();
    const { id } = useParams();
    
    
    useEffect(()=>{
        dispatch(getCoursesById(id));
        axios
        .post(`http://localhost:3001/mercadopago`, datos)
        .then((data)=>{
            setDatos(data.data)
            console.info('Contenido de data:', data)
        }).catch(err => console.error(err)) 
    },[])

    
    return (
        <div>
            { 
            !datos ? <p>Espere un momento....</p> : 
            <>
                <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Curso</th>
                    <th>Precio</th>
                  

                </tr>
                </thead>
                <tbody>
                
                <tr key={idCourse}>
                    <td>{idCourse}</td>
                    <td>{course.name}</td>
                    <td>{course.price}</td>
                    
                </tr>
                     
                </tbody>  
                </table>
                <Comprar data={datos}/>
            </>
            }
        </div>
    );
}

export default Checkout;