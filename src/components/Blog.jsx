import React, {useEffect, useState} from "react"
import data from "../Data"
import {Link, useLocation} from "react-router-dom"

export default function Blog(props){
    const match = useLocation();
    const [url, setUrl] = useState("");

    useEffect(()=>{
        const newUrl = () =>{
            if (match.pathname.slice(-1) === '/'){
                return match.pathname.slice(0, match.pathname.length - 1);
            }else{
                return match.pathname;
            }
        }
        setUrl(newUrl());
    }, [match]);
    return (
        <div className="page">
            <h1>Blog</h1>
            <ul>
                {data.map(blog =>
                    <li key={blog.id}><Link to={`${url}/${blog.id}`}>{blog.title}</Link></li>
                    )}
            </ul>
        </div>
    )
}