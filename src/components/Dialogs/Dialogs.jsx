import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {



    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.dialogsPage.messages
        .map(m => <Message message={m.message} id={m.id}/>);

    let onAddMessage = () => {
        props.addMessage()
    }
    let onMessageChange = (e) => {
        let text = e.target.value
        props.messageChange(text)
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
                        <textarea value={props.dialogsPage.newMessageText}
                                  onChange={onMessageChange}
                                  placeholder='Enter your message'>
                        </textarea>
                    </div>
                    <div>
                        <button className={classes.sendBtn} onClick={onAddMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs