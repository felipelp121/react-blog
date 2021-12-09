// import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import data from "../Data";
export default function BlogPost(props){

    function useBlog(){
        const id = useParams().id;
        return data.filter((blog)=>blog.id == id)[0];
    }

    const blog = useBlog();

    return (
        <div className="page">
            <h1>{blog.title}</h1>
            <h3>{blog.desc}</h3>
        </div>
    )

}