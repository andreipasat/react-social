
import * as axios from 'axios';

const instance = axios.create({
    withCredentials : true,
    baseURL : `https://social-network.samuraijs.com/api/1.0/`,
    headers : {
        "API-KEY": "504e59bf-095b-4a7f-b7d5-e04c93e0aea8"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => { 
            return response.data 
        })
    },
    authMe() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        })
    },
    apiUnFollow(userId) {
        return instance.delete(`follow/` + userId).then(response => {
            return response.data;
        })
    },
    apiFollow(userId) {
        return instance.post(`follow/` + userId,{}).then(response => {
            return response.data;
        })
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId).then(response => {
            return response.data;
        })
    }
}

