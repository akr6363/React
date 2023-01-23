const ADD_POST = 'ADD-POST';
const CHANGE_POST_MESSAGE = 'CHANGE-POST-MESSAGE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likeCount: 12},
        {id: 1, message: "It's my first post", likeCount: 35},
    ],
    newPostText: 'it-kamasutra.com',
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likeCount: 0,
            }
            return  {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }

        case CHANGE_POST_MESSAGE: {
            return  {
                ...state,
                newPostText: action.newText
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

export default profileReducer