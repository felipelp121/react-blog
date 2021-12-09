import React from "react";
import {Link} from "react-router-dom";
import useAuth from "../actions/userAuth";

export default function Nav(props){
    return (
        <div className="Nav">
            <p>Felipe e Sabrina</p>
            <ul>
                {useAuth() ? <li><Link to="/logout">Minha Conta</Link></li> : <li><Link to="/login">Login</Link></li>} 
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/assistir">Video</Link></li>
            </ul>
        </div>
    )
}