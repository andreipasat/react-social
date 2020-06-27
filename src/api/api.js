
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
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId).then(response => response.data)
    },
    updateStatus(status) {
        return instance.put('profile/status', {
            status : status
        }).then(response => response.data)
    },
    savePhoto(photoFile) {
        let formData = new FormData()
        formData.append('image',photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        }).then(response => response.data)
    },
    saveProfile(data) {
        return instance.put('profile', data).then(response => response.data)
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`,{email, password, rememberMe, captcha}).then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url').then(response => response.data)
    }
}

