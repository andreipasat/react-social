import {profileAPI} from '../api/api'

const addpost = 'ADD-POST';
const updatenewposttext = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts : [
        {id : 1, message : 'Hi my friend' , likes : 1},
        {id : 2, message : 'How are you?' , likes : 10},
        {id : 3, message : 'How are you2?' , likes : 12},
        {id : 4, message : 'How are you3?' , likes : 13},
    ],
    newPostText : 'new post text',
    profile : null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case addpost : {
            let stateCopy = {
                ...state,
                newPostText : '',
                posts : [ ...state.posts, {id : 6, message : state.newPostText,likes : 0} ]
            };
            return stateCopy;
        }
        case updatenewposttext : {
            let stateCopy = {
                ...state,
                newPostText : action.newPostText
            };
            return stateCopy;
        }
        case SET_USER_PROFILE : {
            return {...state, profile : action.profile}
        }
        default : {
            return state;
        }

    }


}

export const addPostActionCreator = () => ({ type : addpost });
export const updateNewPostTextActionCreator = (text) =>
    ({ type : updatenewposttext, newPostText : text});
export const setUserProfile = (profile) => ({type : SET_USER_PROFILE, profile});

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response))
        })
    }
}


export default profileReducer;