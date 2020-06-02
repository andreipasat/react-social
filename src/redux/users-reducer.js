import { usersAPI } from '../api/api';


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

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
            users : state.users.map( u => {
                if (u.id === action.userId) {
                    return {
                        ...u, followed : true
                    }    
                }
                return u;
            })
        }
        case UNFOLLOW : 
        return {
            ...state,
            users : state.users.map( u => {
                if (u.id === action.userId) {
                    return {
                        ...u, followed : false
                    }    
                }
                return u;
            })
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
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(response.items))
            dispatch(setTotalUsersCount(response.totalCount))
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.apiFollow(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(followSuccess(userId)) 
            }
            dispatch(toggleIsFollowingProgress(false, userId))  
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.apiUnFollow(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(unfollowSuccess(userId)) 
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        });
    }
}


export default usersReducer;