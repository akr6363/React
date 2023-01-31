import {profileAPI, usersAPI} from "../api/api";
import {follow} from "./users-reducer";


const ADD_POST = 'ADD-POST';
const CHANGE_POST_MESSAGE = 'CHANGE-POST-MESSAGE';
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'
const UPDATE_STATUS = 'UPDATE_STATUS'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likeCount: 12},
        {id: 1, message: "It's my first post", likeCount: 35},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: '',
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likeCount: 0,
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }

        case CHANGE_POST_MESSAGE: {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (text) => ({
    type: CHANGE_POST_MESSAGE, newText: text,
})

export const setProfile = (profile) => ({type: SET_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})

// export const updateStatus = (status) => ({type: SET_STATUS, status})

export const getProfile = (profileId) => (dispatch) => {
    profileAPI.getProfile(profileId)
        .then(data => {
            dispatch(setProfile(data))
        })
}
export const getStatus = (profileId) => (dispatch) => {
    profileAPI.getStatus(profileId)
        .then(data => {
            dispatch(setStatus(data))
        })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer