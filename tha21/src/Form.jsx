import React, {useState} from 'react'
import './Form.css'

export default function Form(props) {

    const [food, setFood] = useState('')
    const [cal, setCal] = useState('') 
    function foodhandler (e) {
        setFood(e.target.value);
    };

    function calhandler (e) {
        setCal(e.target.value);
    };

    function submit(e) {
        setFood('')
        setCal('')
        props.setFoods([...props.foods, {'name': food, 'cal': cal }])
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={submit} className='form'>
                <input type="text" onChange={foodhandler} value={food} placeholder='Food item' required />
                <br/>
                <input type="text" onChange={calhandler} value={cal} placeholder = 'calories' required/>
                <br/>
                <button type='submit' >Add item</button>
            </form>
        </div>
    )
}
