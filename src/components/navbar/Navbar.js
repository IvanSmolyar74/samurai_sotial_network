import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active} posts={props.posts}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active} dialogs={props.dialogs} messages={props.messages}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;