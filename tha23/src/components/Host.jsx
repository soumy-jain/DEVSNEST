import { useState, useCallback } from "react";
import useList from "./useList";

export default function Host() {
    const curList = useList(["phone", "laptop", "watch", "tablet"]);

    const [value, setValue] = useState("");
    return (
        <div>
            <h1 >Todo List</h1>
            <input type="text" placeholder="Add TODO" value = {value} onChange = {(e) =>{
                setValue(e.target.value);
            }}/>
            <button onClick={()=> {
                curList.push(value);
                setValue("");
            }}>Add</button>
            <ul>
                {
                    curList.list.map((item, index) => {
                            return <li key={index}>
                                {item} <button className="X" onClick={ () => {
                                curList.clear(index)}
                            }> X </button>
                            </li>
                    })
                }
            </ul>
            {curList.list.length>0 ? <button onClick = {() => {
                curList.clearAll();
            }}> Clear All!
            </button>: ""}
        </div>
    )
}