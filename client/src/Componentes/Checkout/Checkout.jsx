import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSelector } from "react-redux";
import Comprar from '../MercadoPago/Comprar'

function Checkout() {
    const [datos, setDatos] = useState("")
    
    useEffect(()=>{
        axios
        .get(`http://localhost:3001/mercadopago`)
        .then((data)=>{
        setDatos(data.data)
        console.info('Contenido de data:', data)
        }).catch(err => console.error(err)) 
    },[])

    const user = useSelector((state) => state.userDetail);
    return (
        <div>
            { 
            !datos ? <p>Espere un momento....</p> : 
            <>
                <table>
                <thead>
                <tr>
                    <th>Curso</th>
                    <th>Precio</th>
                    <th>Cantidad</th>

                </tr>
                </thead>
                <tbody>
                {
                user.buys.map((buy, i) => {
                    return(
                    <tr key={buy.id}>
                        <td>{buy.courseName}</td>
                        <td>{buy.total_price}</td>
                        <td>{buy.quantity}</td> 
                    </tr>
                    )
                })} 
                </tbody>  
                </table>
                <Comprar data={datos}/>
            </>
            }
        </div>
    );
}

export default Checkout;