import React from "react";
import './Monster.css';


const Monster = ({ id, name, serialNumber}) => {
    return (
        <div className="card dib">
            <img className="grow "src={`https://robohash.org/${id}?size=200x200`} alt="monster" />
            <div>
                <h2>{name}</h2>
                <p className="grow dim">SN:{serialNumber}</p>
            </div>
        </div>
    );
}

export default Monster;