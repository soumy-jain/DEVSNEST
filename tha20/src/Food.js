import React from "react"
import {useState} from "react";
import './Food.css'

export default function Food(props) {
    function del () {
        let newarr = props.arr.filter( (e, key) => {
            return key != props.index;
        });
        console.log(newarr);
        props.setFoods(newarr);
    }
    return (
        <div className='Food'>
            <h2>{props.name}</h2>
            <h3>You have consumed {props.cal} calories</h3>
            <i class="fas fa-times-circle fa-2x" onClick={del}></i>
        </div>
    )
}