import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPages


    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = state.messages
        .map(m => <Message message={m.message} id={m.id}/>);

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }


    let onMessageChange = (e) => {
        let text = e.target.value
        let action = onMessageChangeActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={state.newMessageText}
                                  onChange={onMessageChange}
                                  placeholder='Enter your message'>
                        </textarea>
                    </div>
                    <div>
                        <button className={classes.sendBtn} onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs