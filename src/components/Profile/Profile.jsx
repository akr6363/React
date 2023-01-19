import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {changeMessage} from "../../redux/state";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts = {props.profilePages.posts}
                     newPostText = {props.profilePages.newPostText}
                     addPost={props.addPost}
            changeMessage={props.changeMessage}/>
        </div>
    );
}

export default Profile