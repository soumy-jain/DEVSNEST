  
import React from 'react';
import { updatePlace, UpdatePlaceData } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core';


const Input = () => {
    const place = useSelector((state) => state.place);
    const placeData = useSelector((state) => state.placeData);
    const dispatch = useDispatch();

    return (
        <>
            <div className="nav">
                <div className="input">
                    <TextField style={{marginRight: 20}} id="outlined-basic" label="Location" size='small' variant="outlined" value={place} onChange={(e) => dispatch(updatePlace(e.target.value))} />
                    <Button className="input-btn" variant="contained" color="primary" onClick={() => {dispatch(UpdatePlaceData(place))}}>Submit</Button>
                </div>
                {placeData.location? 
                    <div className="date">
                    <span>Date : </span>
                    <h2 style={{marginTop: '0'}}>{placeData.forecast.forecastday[0].date}</h2>
                </div>: ''}
          </div>
        </>
    )
}

export default Input;