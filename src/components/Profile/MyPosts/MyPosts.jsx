import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/state";



const MyPosts = (props) => {

    let postsElements = props.posts
        .map(p => <Post message={p.message} likesСount={p.likeCount}/>)

    let NewPostElement = React.createRef()
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = NewPostElement.current.value
        let action = onPostChangeActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={NewPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts