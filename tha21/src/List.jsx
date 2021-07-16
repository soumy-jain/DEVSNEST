import React from "react"
import {useState} from "react";
import Food from './Food.jsx'
import Form from './Form.jsx'

export default function List() {
    const [foods, setFoods] = useState([
        {
            'name': 'Samosa',
            'cal': '25'
        },
        {
            'name': 'Jalebi',
            'cal': '30'
        },
        {
            'name': 'Kachori',
            'cal': '27.5'
        },
        {
            'name': 'Dahi',
            'cal': '15'
        }
    ]);
    var input;
    let arr = []
    for(let i=0;i<foods.length;i++)
    {
        arr.push(<Food name={foods[i].name} index={i} cal={foods[i].cal} setFoods={setFoods} arr={foods}/>)
    }
    function add() {
        let p = input.indexOf(' ')
        let name = input.slice(0,p)
        let cal = input.slice(p+1)
        setFoods([...foods, {'name': name, 'cal': cal}])
    }
    return (
        <div className='Container'>
            <Form setFoods={setFoods} foods={foods}/>
            <div className='List'>
                {(arr.length>0)?arr:<h1>No data found</h1>}
            </div>
        </div>
        );
}