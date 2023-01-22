import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {changeMessage} from "../../redux/store";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts = {props.profilePages.posts}
                     newPostText = {props.profilePages.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile