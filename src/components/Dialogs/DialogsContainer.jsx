import React from 'react';
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthNavigate} from "../HOC/withAuthNavigate";
import {compose} from "redux";

let mapStateToProps = (state) => ({
        dialogsPage: state.dialogsPages,
    })
let mapDispatchToProps = (dispatch) => {
    return {
        messageChange: (text) => {
            let action = onMessageChangeActionCreator(text)
            dispatch(action)
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
)(Dialogs)