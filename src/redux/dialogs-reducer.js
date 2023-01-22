const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE'
const dialogsReducer = (state, action) => {
    switch (action.type) {
        case  CHANGE_MESSAGE:
            state.newMessageText = action.newText;
            return state;
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = '';
            return state;
        default:
            return state
    }
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const onMessageChangeActionCreator = (text) => ({
    type: CHANGE_MESSAGE, newText: text,
})
export default dialogsReducer