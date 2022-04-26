import React from 'react'
import {Link} from 'react-router-dom'

export default function LandingPage (){
    return (
        <div>
            <div className='button'>
            <Link to="/home">Comienza ahora!</Link>
            </div>
            
        </div>
    )
}