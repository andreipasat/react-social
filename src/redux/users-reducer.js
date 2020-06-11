import { usersAPI } from '../api/api';
import { updateObjectsInArray } from '../utils/object-helpers';


const FOLLOW = 'social_network/users/FOLLOW';
const UNFOLLOW = 'social_network/users/UNFOLLOW';
const SETUSERS = 'social_network/users/SETUSERS';
const CURRENT_PAGE = 'social_network/users/CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'social_network/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'social_network/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'social_network/users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users : [],
    pageSize : 50,
    totalUsersCount : 0,
    currentPage : 1,
    isFetching : false,
    followingInProgress : []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW : 
        return {
            ...state,
            users : updateObjectsInArray(state.users, action.userId, "id", {followed : true})
            // state.users.map( u => {
            //         if (u.id === action.userId) {
            //             return {
            //                 ...u, followed : true
            //             }    
            //         }
            //     return u;
            //         })
        }
        case UNFOLLOW : 
        return {
            ...state,
            users : updateObjectsInArray(state.users, action.userId, "id", {followed : false})
        }
        case SETUSERS : 
        return {...state, users : action.users }

        case CURRENT_PAGE :
            return {...state, currentPage : action.currentPage}
        
        case SET_TOTAL_USERS_COUNT : 
            return {...state, totalUsersCount : action.totalUsersCount}

        case TOGGLE_IS_FETCHING : 
            return {...state, isFetching : action.isFetching}

        case TOGGLE_IS_FOLLOWING_PROGRESS : 
            return {...state, 
                followingInProgress : action.isFollowingProgress 
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id != action.userId)
            }

        default : {
            return state;
        }

    }


}

export const followSuccess = (userId) => ({ type : FOLLOW, userId : userId });
export const unfollowSuccess = (userId) => ({ type : UNFOLLOW, userId : userId });
export const setUsers = (users) => ({ type : SETUSERS, users : users });
export const setCurrentPage = (currentPage) => ({ type : CURRENT_PAGE, currentPage : currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type : SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({ type : TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (isFollowingProgress, userId) => ({ type : TOGGLE_IS_FOLLOWING_PROGRESS, isFollowingProgress, userId});

export const requestUsers = (currentPage, pageSize) => { 
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))
    }
}

export const follow = (userId) =>  async (dispatch) => {
    followNofollow(dispatch, userId, usersAPI.apiFollow.bind(usersAPI), followSuccess)
}

export const unfollow = (userId) => async (dispatch) => {
    followNofollow(dispatch, userId, usersAPI.apiUnFollow.bind(usersAPI), unfollowSuccess)
}

const followNofollow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId)) 
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

export default usersReducer;