import React from "react";


const NasaPhoto = (props) => {
    return (
        <div className="nasa-photo-wrapper">
            <header>
            <h3>{props.photo.title}</h3>
            </header>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <p>{props.photo.explanation}</p>
        </div>
    )
}
export default NasaPhoto;