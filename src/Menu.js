import React from "react";
import { NavLink } from "react-router-dom";
import './Menu.css';
import { useAuth } from "./auth";

var routes = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Profile", path: "/profile" },
    { name: "Login", path: "/login" },
    { name: "Logout", path: "/logout" },
];

function Menu() {
    const auth = useAuth();
    return (
        <ul>
            {
            routes.map((route) => { 
                
                if(auth.user == null && route.name === "Profile") {
                    return null;
                }

                if(auth.user == null && route.name === "Logout") {
                    return null;
                }

                if(auth.user != null && route.name === "Login") {
                    return null;
                }

                return (
                <li>
                    <NavLink
                    className={({isActive}) => (isActive ? 'route activeRoute' : 'route')}
                    to={route.path}>{route.name}</NavLink>
                </li>
);
})
}
        </ul>
    );
}

export { Menu };