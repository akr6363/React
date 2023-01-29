import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/800px-Vanamo_Logo.svg.png' />

            <div className={classes.loginBlock}>
                {props.isAuth ?
                <div>{props.login}</div> :
                <NavLink to={'/login/*'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header