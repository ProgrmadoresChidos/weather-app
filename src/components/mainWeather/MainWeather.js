import React from 'react'
import style from './MainWeather.module.css';
import PropTypes from 'prop-types';

const sunny = '../assets/images/Shower.png';
const clouds = '../assets/images/Cloud-background.png';
export const MainWeather = ({  }) => {
    return (
        <div className={style.container}>
            <div className={style.sunny} style={{backgroundImage:`url(${sunny})`}}></div>
            <div className={style.clouds} style={{backgroundImage:`url(${clouds})`}}></div>

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