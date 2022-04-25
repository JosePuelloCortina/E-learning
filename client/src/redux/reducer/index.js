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
            
        default: 
            return state;
    }
}