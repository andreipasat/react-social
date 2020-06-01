import {profileAPI} from '../api/api'

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'

let initialState = {
    posts : [
        {id : 1, message : 'Hi my friend' , likes : 1},
        {id : 2, message : 'How are you?' , likes : 10},
        {id : 3, message : 'How are you2?' , likes : 12},
        {id : 4, message : 'How are you3?' , likes : 13},
    ],
    profile : null,
    status : ''
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
        default : {
            return state;
        }

    }


}

export const addPostActionCreator = (newPost) => ({ type : ADD_POST, newPost });
export const setUserProfile = (profile) => ({type : SET_USER_PROFILE, profile});
export const setProfileStatus = (status) => ({type : SET_PROFILE_STATUS, status})

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response))
        })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setProfileStatus(response))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.resultCode === 0) dispatch(setProfileStatus(status))
        })
    }
}


export default profileReducer;