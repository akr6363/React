import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span onClick={(e) => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p ? classes.selectPage : ''}>{p}</span>
                })}
            </div>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={classes.userPhoto}
                                     src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.isFollowingProgress.some(id => id === u.id)}
                                          onClick={() => props.deleteFollow(u.id)}>follow</button>
                                : <button disabled={props.isFollowingProgress.some(id => id === u.id)}
                                          onClick={() => {props.postFollow(u.id)}}>Unfollow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            {/* <div>{u.location.country}</div>*/}
                            {/*<div>{u.location.city}</div>*/}
                        </span>
                    </span>
                </div>)}
        </div>
    )
}

export default Users
