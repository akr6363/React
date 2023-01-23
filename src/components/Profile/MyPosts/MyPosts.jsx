import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
    let postsElements = props.posts
        .map(p => <Post message={p.message} key={p.id} likesСount={p.likeCount}/>)

    let NewPostElement = React.createRef()
    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = NewPostElement.current.value
        props.changePostMessage(text)
    }
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={NewPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts