import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from '../hooks/customHooks/auth.js';

function ProfilePage() {

    const auth = useAuth();

    return(
        <>
            <h2>Profile</h2>
            <p>Welcome, {auth.user.username}</p>
            {auth.user.isAdmin && <p>You are an admin</p>}
        </>

    )
}

export { ProfilePage };