import axios from "axios";


export function allUser(){
    return async function(dispatch){
        try{
            const users = await axios.get(`http://localhost:3001/user`)
            return dispatch({
                type: 'ALL_USERS',
                payload: users.data
            })
        }catch(error){
            console.log(error)
        }
    }
}


export function createUser(form){ 
    return async function(dispatch){ 
        await axios.post(`http://localhost:3001/user/create`,form) 
        dispatch({type: "POST_USER"})
    }
} 
 
export function validateUser(form){ 
    return async function(dispatch){ 
        await axios.post(`http://localhost:3001/user`,form) 
        dispatch({type: "VALIDATE_USER"})
    }
} 