import React from 'react'
import { Highlight } from './components/highlight/Highlight'
import { NextDays } from './components/nextDays/NextDays'
import { Search } from './components/search/Search'

export const WeatherApp = () => {
    return (
        <div>
            Weather works!!!
            <Search />
            <NextDays />
            <Highlight />
        </div>
    )
}
