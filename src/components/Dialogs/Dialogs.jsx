import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message} id={m.id}/>);

    let newMessageElement = React.createRef()

    let addMessage = () => {
        let message = newMessageElement.current.value
        alert(message)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea ref={newMessageElement}></textarea>
                <button className={classes.sendBtn} onClick={addMessage}>Отправить</button>
            </div>

        </div>
    );
}

export default Dialogs