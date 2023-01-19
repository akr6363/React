import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Friends/Friend";
import DialogItem from "../Dialogs/DialogItem/DialogItem";

const setActive = (NavData) => NavData.isActive ? classes.activeLink : ''
const Navbar = (props) => {

    let friendsElements = props.state.friends
        .map(f => <Friend name={f.name} photo={f.photo}/>);

    return (
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink to='/profile' className={setActive}>Profile</NavLink></div>
            <div className={classes.item}><NavLink to='/dialogs' className={setActive}>Messages</NavLink></div>
            <div className={classes.item}><a>News</a></div>
            <div className={classes.item}><a>Music</a></div>
            <div className={classes.item}><a>Settings</a></div>
            <div>
                <h2>Friends</h2>
                <div className={classes.friendsList}>
                    {friendsElements}
                </div>
            </div>
        </nav>
    );
}

export default Navbar