import React from "react";

function WhatsnewCard(props) {
    return <div className="card">
            <img src={props.image} className="card-img-top" alt="img1" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Ksh{props.price}</p>
            </div>
        </div>
    
}


export default WhatsnewCard;