import React from "react";
import { NavLink } from "react-router-dom";
import './Menu.css';

var routes = [
    { name: "Home", path: "/home" },
    { name: "Blog", path: "/blog" },
    { name: "Profile", path: "/profile" },
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