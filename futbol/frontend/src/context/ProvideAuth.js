import React , {useState} from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export function ProvideAuth({ children }) {
    const authcontext = useProvideAuth();
    return (
        <AuthContext.Provider value={authcontext}>
            {children}
        </AuthContext.Provider>
    );
}

function useProvideAuth() {
    const [user, setUser] = useState({
        roles: [],
        name: null,
        email: null,
    })

    /**
     * Set de toda la información necesaria del usuario
     * @param info array de información de un usuario
     * @param permisos array de roles del realm FRBA
     */
    const setInfo = (info,permisos) => {
        setUser(prevState => ({
            ...prevState,
            roles: permisos,
            name: info.name ? info.name : null,
            email: info.email ? info.email : null,
        }))
    }

    const doLogin = async (user,password) => {
        await axios({
            method: 'POST',
            url: 'https://node-dev.frba.utn.edu.ar/login',
            data: {
                user: user,
                password: password
            }
        }).then(response => {
            console.log("se autentico bien wachin")
        }).catch(error => {
            console.error("Hubo un error xd")
        })
    }

    const doLogout = () => {

    }
    const isLogedIn = () => {
        return user.email !== null
    }

    const hasRole = (roles) => {
        return roles.every((role) => user.roles.includes(role));
    }


    return {
        user, isLogedIn, hasRole
    };
}
