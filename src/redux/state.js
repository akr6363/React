const ADD_POST = 'ADD-POST';
const CHANGE_POST_MESSAGE = 'CHANGE-POST-MESSAGE';
const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE'

let store = {
    _callSubscribes() {
        console.log('no subscribers (observers)')
    },
    _state: {
        profilePages: {
            posts: [
                {id: 1, message: 'Hi, how are you', likeCount: 12},
                {id: 1, message: "It's my first post", likeCount: 35},
            ],
            newPostText: 'it-kamasutra.com',
        },
        dialogsPages: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Anya'},
                {id: 4, name: 'Oleg'},
                {id: 5, name: 'Roman'},
                {id: 6, name: 'Olga'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
            newMessageText: '',
        },
        navBar: {
            friends: [
                {
                    id: 1,
                    name: 'Vova',
                    nickname: 'vv33',
                    photo: 'https://weblinks.ru/wp-content/uploads/2021/02/1xmok9jfvge.jpg'
                },
                {
                    id: 1,
                    name: 'Galya',
                    nickname: 'galyavv',
                    photo: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg'
                },
                {
                    id: 1,
                    name: 'Dart Veider',
                    nickname: 'star666',
                    photo: 'https://pixelbox.ru/wp-content/uploads/2022/05/smeshoy-kotik-avatar-pixelbox.ru-15.jpg'
                }
            ]
        }
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscribes = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePages.newPostText,
                likeCount: 0,
            }
            this._state.profilePages.posts.push(newPost)
            this._state.profilePages.newPostText = ''
            this._callSubscribes(this._state)
        } else if (action.type === CHANGE_POST_MESSAGE) {
            this._state.profilePages.newPostText = action.newText
            this._callSubscribes(this._state)
        } else if (action.type === CHANGE_MESSAGE) {
            this._state.dialogsPages.newMessageText = action.newText
            this._callSubscribes(this._state)
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: this._state.dialogsPages.messages.length + 1,
                message: this._state.dialogsPages.newMessageText,
            }
            this._state.dialogsPages.messages.push(newMessage)
            this._state.dialogsPages.newMessageText = ''
            this._callSubscribes(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const onPostChangeActionCreator = (text) => ({
    type: CHANGE_POST_MESSAGE, newText: text,
})
export const onMessageChangeActionCreator = (text) => ({
    type: CHANGE_MESSAGE, newText: text,
})




export default store
