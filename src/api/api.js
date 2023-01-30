import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0506d89d-a227-4922-9ef7-6564b7940ce0',
    }

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    authorization() {
        return instance.get(`auth/me`).then(response => response.data)
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
