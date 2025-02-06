import { React } from "react";
import { useAuth } from "../auth";

function LogoutPage() {

    const auth = useAuth();

    const logout = (e) => {
        e.preventDefault();
        auth.logout();
    }

    return(
        <>
            <h2>Logout</h2>
            <form onSubmit={e => logout(e)}>
                <label for="username">Seguro de que quieres cerrar sesion?: </label>

                <button type="submit">Salir</button>
            </form>

        </>

    );
}

export { LogoutPage };