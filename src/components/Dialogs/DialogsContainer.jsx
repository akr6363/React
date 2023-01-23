import React from 'react';
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPages
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    let messageChange = (text) => {
        let action = onMessageChangeActionCreator(text)
        props.store.dispatch(action)
    }
    return (
        <Dialogs dialogsPage={state}
                 addMessage={addMessage}
                 messageChange={messageChange}/>
    );
}

export default DialogsContainer