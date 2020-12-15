import React from 'react'
import { Highlight } from './components/highlight/Highlight'
import { NextDays } from './components/nextDays/NextDays'

export const WeatherApp = () => {
    return (
        <div>
            Weather works!!!
            <NextDays />
            <Highlight />
        </div>
    )
}
