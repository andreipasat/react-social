import {authAPI, securityAPI} from '../api/api'
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'social_network/auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'social_network/auth/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    userId : null,
    email : null,
    login : null,
    isAuth : false,
    captchaUrl : null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA : 
        return {
            ...state,
            ...action.payload
        }

        case GET_CAPTCHA_URL_SUCCESS :
            return {...state, captchaUrl: action.url}
        
        default : {
            return state
        }

    }


}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type : SET_USER_DATA, payload : {userId, email, login, isAuth}})
export const getCaptchaUrlSuccess = (url) => ({type : GET_CAPTCHA_URL_SUCCESS, url})

export const authMe = () => async (dispatch) => {
    let response = await authAPI.authMe();
    let { id, email, login} = response.data
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(id, email, login, true))
    }
}


export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response  = await authAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        dispatch(authMe())
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.messages.length > 0 ? response.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error : message}))
    }
}


export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl()
    dispatch(getCaptchaUrlSuccess(response.url))
}


export default authReducer