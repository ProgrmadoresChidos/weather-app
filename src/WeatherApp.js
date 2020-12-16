import React from 'react'
import { Highlight } from './components/highlight/Highlight'
import { NextDays } from './components/nextDays/NextDays'
import { MainWeather } from './components/mainWeather/MainWeather'

export const WeatherApp = () => {
    return (
        <div>
            Weather works!!!
            <MainWeather />
            <NextDays />
            <Highlight />
        </div>
    )
}
