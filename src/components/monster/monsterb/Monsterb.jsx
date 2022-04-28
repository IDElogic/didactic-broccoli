import React from "react";
import './Monsterb.css';


const Monsterb = ({ id, name, serialNumber}) => {
    return (
        <div className="dib">
            <img className="grow "src={`https://robohash.org/${id}?size=200x200`} alt="monster" />
            <h2>Hi!</h2>
        </div>
    );
}

export default Monsterb;