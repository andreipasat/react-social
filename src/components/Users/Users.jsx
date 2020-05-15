import React from 'react';
import s from './Users.module.css';
import userIcon from '../../assets/images/user_icon.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const Users = (props) => {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize);

        let pages = [];

        for (let i =1; i <= pagesCount; i++) {
            pages.push(i);
        }

    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p && s.selectedPage} 
                        onClick={ (e) => { props.onPageChanged(p) } }>{p}</span>
                    })
                }
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small !== null ? user.photos.small : userIcon} className={s.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            { 
                                user.followed ? 
                                <button onClick={ () => { 

                                   axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/` + user.id, {
                                       withCredentials : true,
                                       headers : {
                                            "API-KEY": "504e59bf-095b-4a7f-b7d5-e04c93e0aea8"
                                       }
                                       
                                   }).then(response => {
                                       if (response.data.resultCode === 0) {
                                            props.unfollow(user.id) 
                                       }
                                   }) 

                                    
                                } }>Unfollow</button> : 
                                <button onClick={ () => { 
                                    
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/` + user.id,{}, {
                                        withCredentials : true,
                                        headers : {
                                                "API-KEY": "504e59bf-095b-4a7f-b7d5-e04c93e0aea8"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(user.id) 
                                        }
                                    })

                                    
                                } }>Follow</button> 
                            }
                            
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div><div>{user.status}</div>
                        </span>
                        <span>
                            {/* <div>{user.location.country}</div> */}
                            {/* <div>{user.location.city}</div> */}
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Users;