const initialState = {
   
    user: [],
    
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
            
        default: 
            return state;
    }
}