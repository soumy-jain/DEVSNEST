  
export const updatePlace = (place) => {
    return {
        type: "UPDATE_PLACE",
        payload: place
    }
} 

export const UpdatePlaceData = (place) => {
    return (dispatch) => {
            fetch(`https://api.weatherapi.com/v1/forecast.json?key=c25f2da8f8034704a7b184100211208&q=${place}`)
            .then(res => res.json())
            .then((data) => {
            dispatch({
                type: "UPDATE_PLACE_DATA",
                payload: data
            })
        })
    }
} 