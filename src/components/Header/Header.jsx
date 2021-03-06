import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <>
            <header className={s.header}>
                <img src='https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/ma5.png'></img>
                <div className={s.loginBlock} >
                    { props.isAuth ? <button onClick={props.logout}>Logout</button> :  <NavLink to='/login'>Login</NavLink> }
                </div>
            </header>  
        </>
    );
}

export default Header