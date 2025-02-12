import React from "react";
import { useAuth } from '../hooks/customHooks/auth.js';
import { Navigate } from "react-router-dom";

function LoginPage() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const auth = useAuth();

    const login = (e) => {
        e.preventDefault();
        auth.login(username);
    }

    if(auth.isLoggedIn) {
        return <Navigate to="/profile"/>;
    }

    return(
        <>
            <h2>Login</h2>
            <form onSubmit={e => login(e)}>
                <label for="username">Usuario: </label>
                <input type="text" id="username" value={username} onChange={(input) => setUsername(input.target.value)}/>

                <label for="password">Contraseña: </label>
                <input type="password" id="password" value={password} onChange={(input) => setPassword(input.target.value)}/>

                <button type="submit">Iniciar sesion</button>
            </form>

        </>

    );
}

export { LoginPage };