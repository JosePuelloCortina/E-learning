


const initialState = {

    user: [],
    courses: [],
  
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case 'ALL_USERS':
            return {
                ...state,
                user: action.payload
            }


            case 'POST_USER':
            return {
                ...state,
            }
            

        case 'ALL_COURSES':
            return {
                ...state,
                courses: action.payload
            }
        case 'GET_USER_BY_ID':
        return {
            ...state,
            user: action.payload
        }
        default:

            return state;
    }
}