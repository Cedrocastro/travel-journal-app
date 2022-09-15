import React from "react";

export default function Main(props) {

    return (
        <div className="container">
            <img src={`./image/${props.img}`} className="img-one" />
            <div className="sub-container1">
                <div className="sub-container2">
                    <img src={`./image/${props.stats.logo}`} className="img2" />
                    <h2>{props.stats.country}</h2>
                    <a href={props.stats.link} target="_blank" className="lead" >{props.stats.lead}</a> 
                </div>
                <h1>{props.title}</h1>
                <h4>{props.date}</h4>
                <p>{props.para}</p>
            </div>
        </div>
    )
}