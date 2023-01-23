import React from 'react';
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().dialogsPages
                let addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }
                let messageChange = (text) => {
                    let action = onMessageChangeActionCreator(text)
                    store.dispatch(action)
                }
               return <Dialogs dialogsPage={state}
                         addMessage={addMessage}
                         messageChange={messageChange}/>
            }
        }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer