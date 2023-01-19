let rerenderEntireTree = () => {
}

let state = {
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
    },
    navBar: {
        friends: [
            {id:1, name:'Vova', nickname: 'vv33', photo: 'https://weblinks.ru/wp-content/uploads/2021/02/1xmok9jfvge.jpg'},
            {id:1, name:'Galya', nickname: 'galyavv', photo: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg'},
            {id:1, name:'Dart Veider', nickname: 'star666', photo: 'https://pixelbox.ru/wp-content/uploads/2022/05/smeshoy-kotik-avatar-pixelbox.ru-15.jpg'}
        ]
    }

}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePages.newPostText,
        likeCount: 0,
    }
    state.profilePages.posts.push(newPost)
    state.profilePages.newPostText = ''
    rerenderEntireTree(state)
}

export const changeMessage = (newText) => {
    state.profilePages.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state

/*
let store = {
    _subscribe() {
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

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePages.newPostText,
            likeCount: 0,
        }
        this._state.profilePages.posts.push(newPost)
        this._state.profilePages.newPostText = ''
        this._subscribe()
    },

    changeMessage(newText) {
        this._state.profilePages.newPostText = newText
        this._subscribe()
    },

    subscribe(observer) {
        this._subscribe = observer
    }


}

export default store*/
