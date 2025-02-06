import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../auth";

function ProfilePage() {

    const auth = useAuth();

    return(
        <>
            <h2>Profile</h2>
            <p>Welcome, {auth.user.username}</p>
        </>

    )
}

export { ProfilePage };