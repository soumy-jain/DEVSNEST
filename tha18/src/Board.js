import React from 'react'
import "./Board.css"

function Boxb() {
    return (
        <div className='boxb'></div>
    );
}

function Boxw() {
    return (
        <div className='boxw'></div>
    );
}

var arr1=[];

for(let i=0;i<4;i++)
{
    arr1.push(<Boxw/>);
    arr1.push(<Boxb/>);
}

var arr2=[];

for(let i=0;i<4;i++)
{
    arr2.push(<Boxb/>);
    arr2.push(<Boxw/>);
}

function Row1() {
    return (
        <div className='row'>
            {arr1}
        </div>
    );
}

function Row2() {
    return (
        <div className='row'>
            {arr2}
        </div>
    );
}

var arr = [];

for(let i=0;i<4;i++)
{
    arr.push(<Row1/>);
    arr.push(<Row2/>);
}

export default function Board() {
    return (
        <div className='board'>
            {arr}
        </div>
    )
}
