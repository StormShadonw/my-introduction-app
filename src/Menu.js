import React from "react";
import { NavLink } from "react-router-dom";
import './Menu.css';

var routes = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Profile", path: "/profile" },
    { name: "Login", path: "/login" },
    { name: "Logout", path: "/logout" },
];

function Menu() {
    return (
        <ul>
            {routes.map((route) => (
                <li>
                    <NavLink
                    className={({isActive}) => (isActive ? 'route activeRoute' : 'route')}
                    to={route.path}>{route.name}</NavLink>
                </li>
))}
        </ul>
    );
}

export { Menu };