import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg" alt="" />
            {props.message}
            <div><span>likes {props.likesСount}</span></div>
        </div>
    );
}

export default Post