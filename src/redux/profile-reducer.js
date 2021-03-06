import {profileAPI} from '../api/api'
import {stopSubmit} from "redux-form";

const ADD_POST = 'social_network/profile/ADD_POST'
const SET_USER_PROFILE = 'social_network/profile/SET_USER_PROFILE'
const SET_PROFILE_STATUS = 'social_network/profile/SET_PROFILE_STATUS'
const DELETE_POST = 'social_network/profile/DELETE_POST'
const SET_PROFILE_PHOTO = 'social_network/profile/SET_PROFILE_PHOTO'

let initialState = {
    posts : [
        {id : 1, message : 'Hi my friend' , likes : 1},
        {id : 2, message : 'How are you?' , likes : 10},
        {id : 3, message : 'How are you2?' , likes : 12},
        {id : 4, message : 'How are you3?' , likes : 13},
    ],
    profile : null,
    status : '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST : {
            let stateCopy = {
                ...state,
                newPostText : '',
                posts : [ ...state.posts, {id : 6, message : action.newPost,likes : 0} ]
            };
            return stateCopy;
        }
        case SET_USER_PROFILE : {
            return {...state, profile : action.profile}
        }
        case SET_PROFILE_STATUS : {
            return {...state, status : action.status}
        }
        case DELETE_POST : {
            return {...state, posts : state.posts.filter(p => p.id != action)}
        }
        case SET_PROFILE_PHOTO : {
            return {...state, profile:{...state.profile, photos : action.photos}}
        }

        default : {
            return state;
        }

    }


}

export const addPostActionCreator = (newPost) => ({ type : ADD_POST, newPost });
export const setUserProfile = (profile) => ({type : SET_USER_PROFILE, profile});
export const setProfileStatus = (status) => ({type : SET_PROFILE_STATUS, status})
export const deleteActionCreator = (id) => ({type : DELETE_POST, id})
export const setProfilePhoto = (photos) => ({type : SET_PROFILE_PHOTO, photos})

export const getProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setProfileStatus(response))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0) dispatch(setProfileStatus(status))
}

export const savePhoto = (photo) => async (dispatch) => {
    let response = await profileAPI.savePhoto(photo)
    if (response.resultCode === 0) dispatch(setProfilePhoto(response.data.photos))
}

export const saveProfile = (data) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(data)
    if(response.resultCode === 0) {
        dispatch(getProfile(userId))
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : 'Some error'
        dispatch(stopSubmit('profile', {_error : message}))
        return Promise.reject(message)
    }
}

export default profileReducer;