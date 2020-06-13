import { authMe } from "./auth-reducer"

const SET_INITIALIZED = 'social_network/app/SET_INITIALIZED'

let initialState = {
    initialized : false
}

const appReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_INITIALIZED : 
        return {...state, initialized : true}

        default : {
            return state
        }
    }

}

export const initializedSuccess = () => ({type : SET_INITIALIZED})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMe())
    // promise.then(() => {
    //     dispatch(initializedSuccess())
    // })

    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })

    
}



export default appReducer;