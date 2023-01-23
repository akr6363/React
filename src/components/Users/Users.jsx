import React from "react";

import classes from './Users.module.css';

const Users = (props) => {
    // let usersElements = props.users
    //     .map(p => <Post message={p.message} key={p.id} likesСount={p.likeCount}/>)
    if (props.users.length === 0) {
        debugger
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://www.topnews.ru/wp-content/uploads/2020/10/dmitrii-nagiev.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://www.topnews.ru/wp-content/uploads/2020/10/dmitrii-nagiev.jpg',
                followed: true,
                fullName: 'Anna',
                status: 'I like football',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://www.topnews.ru/wp-content/uploads/2020/10/dmitrii-nagiev.jpg',
                followed: false,
                fullName: 'Oleg',
                status: 'I am fine',
                location: {city: 'Perm', country: 'Russia'}
            },
        ])
    }

    return (
        <div>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img className={classes.userPhoto} src={u.photoUrl} alt=""/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>follow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Unfollow</button>
                            }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                             <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)}
        </div>
    );
}

export default Users