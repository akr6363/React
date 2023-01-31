import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import React from "react";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
if (!props.profile) {
    return <Preloader />
}
    return (
        <div>
            <div>
                <img className={classes.banner} src='https://ethnomir.ru/upload/medialibrary/77b/kolibri.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                <img className={classes.ava} src={props.profile.photos.large}/>
                <h2 className={classes.userName}>{props.profile.fullName}</h2>
                <div>{props.profile.aboutMe ? props.profile.aboutMe : <span>пусто</span>}</div>
                <div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo