import React from 'react'
import style from './MainWeather.module.css';
// import PropTypes from 'prop-types';

const sunny = '../assets/images/Shower.png';
const clouds = '../assets/images/Cloud-background.png';
export const MainWeather = () => {

    const searchPlaces = () => {
        console.log('Search for places');
    }
    const currentLocation = () => {
        console.log('Current location');
    }

    return (

        <div className={style.container}>
            <div className={style.mainWeather__form}>
                <button onClick={searchPlaces}>Search for places</button>
                <div className={style.mainWeather__icon} onClick={currentLocation}>
                    <i className="material-icons">gps_fixed</i>
                </div>
            </div>
            <div className={style.sunny} style={{ backgroundImage: `url(${sunny})` }}></div>
            <div className={style.clouds} style={{ backgroundImage: `url(${clouds})` }}></div>
            <div className={style.degrees}><h2>15°c</h2></div>
            <div className={style.shower}>Shower</div>
            <div className={style.date}>Fecha</div>
            <div className={style.city}>
                <i className="material-icons">location_on</i>
                    Ciudad
                </div>
        </div>
    )
}

/*MainWeather.propTypes = {
    percentage: PropTypes.number.isRequired
}*/