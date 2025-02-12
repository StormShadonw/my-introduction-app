import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

const admins = ["itieno", 'ramartinez'];
const editors = ["llopez", 'ramartinez'];

function AuthProvider({ children }) {
    const location = useLocation();
    const [user, setUser] = React.useState(null);
    const navigate = useNavigate();

    const login = (username) => {

        const isAdmin = admins.find((admin) => admin === username);
        const isEditor = editors.find((admin) => admin === username);
        
        setUser({ username, isAdmin, isEditor });

        if(navigate.state && navigate.state.prevPath) {
            navigate(navigate.state.prevPath);

        } else {
            navigate('/profile');
        }

    }

    const logout = () => {
        setUser(null);
        navigate("/");
    }

    const isLoggedIn = user != null;

    const auth = { user, login, logout, isLoggedIn };
    
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const auth = React.useContext(AuthContext);
    return auth;
}

function AuthRoute({ children }) {
    const location = useLocation();
    const auth = useAuth();

    if (!auth.isLoggedIn) {
        return <Navigate to="/login" state={ { prevPath: location.pathname }}/>;
    }
    return children;
}

export { 
    AuthProvider,
    useAuth,
    AuthRoute
}