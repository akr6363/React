import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://ethnomir.ru/upload/medialibrary/77b/kolibri.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src='https://4tololo.ru/sites/default/files/inline/images/2020/04/14-1501-296004532.jpg'/>
                <div>
                    descr
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo