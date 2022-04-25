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

