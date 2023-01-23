import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChange = (text) => {
        let action = onPostChangeActionCreator(text)
        props.store.dispatch(action)
    }
    return (
        <MyPosts changePostMessage={onPostChange}
                 addPost={addPost}
                 posts={state.profilePages.posts}
                 newPostText={state.profilePages.newPostText}/>
    );
}

export default MyPostsContainer