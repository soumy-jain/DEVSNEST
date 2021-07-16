import React from "react"
import {useState} from "react";
import './Food.css'

export default function Food(props) {
    const [flag, setFlag] = useState(0)
    const [food, fixFood] = useState('')
    const [cal, fixCal] = useState('')
    function del () {
        let newarr = props.arr.filter( (e, key) => {
            return key !== props.index;
        });
        console.log(newarr);
        props.setFoods(newarr);
    };
    function foodhandler (e) {
        fixFood(e.target.value);
    };

    function calhandler (e) {
        fixCal(e.target.value);
    };

    function editDone (e) {
        props.setFoods( props.arr.map((e,i) => {
            if(props.index==i)
                return {'name': food, 'cal':cal};
            return e;
        }))
        fixFood('')
        fixCal('')
        setFlag(0);
        e.preventDefault()
    }
    return (
        <div className='Food'>
            {flag===1?
                <div className="">
                    <form className='form'>
                        <input type="text" onChange={foodhandler} value={food} />
                        <br />
                        <input type="text" onChange={calhandler} value={cal}/>
                        <br />
                        <button type='submit' onClick={editDone}>Submit</button>
                    </form>
                </div> :
                <div>
                    <h2>{props.name}</h2>
                    <h3>You have consumed {props.cal} calories</h3>
                    <div className="btn">
                        <i class="fas fa-times-circle fa-2x" onClick={del}></i>
                        <i class="fas fa-pen-nib fa-2x" onClick={() =>{
                            fixFood(props.name)
                            fixCal(props.cal)
                            setFlag(1)
                        }}></i>
                    </div>
                </div>
            }

            
            
        </div>
    )
}