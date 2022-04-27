import React from "react";
import Monster from '../monster/Monster';


const MonsterList = ( { models }) => { 
    return (
        <div>
           {models.map(
            (model)=> {
                return (   
                    <Monster 
                    key={model.id}
                    id={model.id} 
                    name={model.name} 
                    serialNumber={model.phone}/>
                    
                );
            })} 
    </div>
    );
}
export default MonsterList;