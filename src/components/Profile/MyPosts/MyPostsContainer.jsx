import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                let onPostChange = (text) => {
                    let action = onPostChangeActionCreator(text)
                    store.dispatch(action)
                }
                return <MyPosts changePostMessage={onPostChange}
                                addPost={addPost}
                                posts={state.profilePages.posts}
                                newPostText={state.profilePages.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer