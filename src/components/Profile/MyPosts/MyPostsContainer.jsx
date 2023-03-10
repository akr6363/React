import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePages.posts,
        newPostText: state.profilePages.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        changePostMessage: (text) => {
            let action = onPostChangeActionCreator(text)
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer