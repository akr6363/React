import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '18f6704c-b342-412b-afac-2949b9a3d1f5',
    }

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    getProfile(profileId) {
        return instance.get(`profile/${profileId}`).then(response => response.data)
    },
    postFollow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    deleteFollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}

export const authAPI = {
    authorization() {
        return instance.get(`auth/me`).then(response => response.data)
    },
}