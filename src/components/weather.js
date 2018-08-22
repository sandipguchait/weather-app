import React from 'react';

const Weather = (props) =>{
        return(
           <div className="weather__info">

            {
                props.city && props.country ?
                 <p> <span className="weather__value">Location: {props.city } , { props.country }</span></p>:''
            } 
            {
                props.temperature ? <p className="weather__key"> <span className="weather__value">Temperature: { props.temperature }</span> </p> : ''
            }
            {
                props.humidity ? <p className="weather__key"> <span className="weather__value">Humidity: { props.humidity }</span> </p> : ''
            }
            {
                props.description ? <p className="weather__key"> <span className="weather__value">Conditions: { props.description }</span></p> : ''
            }
            {
                props.error ? <p className="weather__key"> <span className="weather__value">{props.error}</span></p>: ''
            }
           </div> 
        )
    }

export default Weather;