import React from "react"
import {useState} from "react";
import './Button.css'
export default function Button() {
    var [count, setCount] = useState(0);
    function clickhandle() {
        setCount(++count);
    };
    return (
        <div className="butdiv">
            <button className='but' onClick={clickhandle}>
                {count}
            </button>
        </div>
    );
}