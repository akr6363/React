import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

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
                              ? <button onClick={() => {
                                    usersAPI.deleteFollow(u.id).then(data => {
                                  if (data.resultCode === 0) {
                                    props.unfollow(u.id)
                                  }
                                })
                              }}>follow</button>
                              : <button onClick={() => {
                                    usersAPI.postFollow(u.id).then(data => {
                                  if (data.resultCode === 0) {
                                    props.follow(u.id)
                                  }
                                })
                              }}>Unfollow</button>
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
