import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

export default function Assitir(props){

    const query = useQuery();
    const [video, setVideo] = useState("lKKsjpH09dU");
    useEffect(()=>{
        if (query.get("video")){
            setVideo(query.get("video"));
        }
    })

    return (
        <div className="page">
            <h1>Youtube Video</h1>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = "true"></iframe>
        </div>
    )
}