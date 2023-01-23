const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case  CHANGE_MESSAGE:
            return  {
                ...state,
                newMessageText: action.newText
            }

        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText,
            }
            return  {
                ...state,
                newMessageText : '',
                messages: [...state.messages, newMessage]
            }

        default:
            return state
    }
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const onMessageChangeActionCreator = (text) => ({
    type: CHANGE_MESSAGE, newText: text,
})
export default dialogsReducer