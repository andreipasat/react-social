const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users : [],
    pageSize : 50,
    totalUsersCount : 0,
    currentPage : 1,
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

        default : {
            return state;
        }

    }


}

export const followAC = (userId) => ({ type : FOLLOW, userId : userId });
export const unFollowAC = (userId) => ({ type : UNFOLLOW, userId : userId });
export const setUsersAC = (users) => ({ type : SETUSERS, users : users });
export const setCurrentPageAC = (currentPage) => ({ type : CURRENT_PAGE, currentPage : currentPage });
export const setTotalUsersCountAC = (totalUsersCount) => ({ type : SET_TOTAL_USERS_COUNT, totalUsersCount})

export default usersReducer;