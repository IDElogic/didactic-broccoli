import React,{ useState, useEffect } from "react";
import './LoadingButton.css';

function LoadingButton () {
    const theTime =15;
    const [second, setSecond] = useState(theTime);
    
    useEffect(() => {
        const timer =setTimeout(() => {
            if(second >= 1) {
            setSecond(second-1);
            }
            }, 1000);
            return () => {
                clearInterval(timer);
            }
        });
        return (
            <div>
                <div className="loading-button">
                    <div className="loading-bar" 
                    style={{width: `${(second *100) / theTime}%` }}/>
                    {second !==0 ? `Loading in ${second} s` : `Well done!  You were patient.`}
                </div>
            </div>
        );
    }

export default LoadingButton;