import classes from './Friend.module.css';
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return (

            <div className={classes.friend}>
                <NavLink to=''>
                    <img src={props.photo} className={classes.friendsPhoto}/>
                </NavLink>
                <div className={classes.friendName}>{props.name}</div>
            </div>

    );
}

export default Friend