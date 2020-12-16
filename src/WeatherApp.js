import React from 'react'
import style from './WeatherApp.module.css';
import { Highlight } from './components/highlight/Highlight'
import { NextDays } from './components/nextDays/NextDays'

export const WeatherApp = () => {
    return (
        <div className={style.weatherApp}>
            {/* <div className={style.weatherApp__container}>
            </div> */}
                <div className={style.weatherApp__sidebar}>
                    component
            </div>
                <div className={style.weatherApp__content}>
                    <NextDays />
                    <Highlight />
                </div>
        </div>
    )
}
