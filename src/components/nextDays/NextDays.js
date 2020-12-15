import style from './NextDays.module.css';
import { Day } from './Day';
import moment from 'moment';

const now = moment();
const next5days = [
    {
        date: now.format(),
        weather: 'sn',
        maxTemp: 16,
        minTemp: 11,
    },
    {
        date: now.add({ days: 1 }).format(),
        weather: 'sl',
        maxTemp: 16,
        minTemp: 11,
    },
    {
        date: now.add({ days: 2 }).format(),
        weather: 'h',
        maxTemp: 16,
        minTemp: 11,
    },
    {
        date: now.add({ days: 3 }).format(),
        weather: 't',
        maxTemp: 16,
        minTemp: 11,
    },
    {
        date: now.add({ days: 4 }).format(),
        weather: 'hr',
        maxTemp: 16,
        minTemp: 11,
    },
];

export const NextDays = () => {
    return (
        <section className={style.nextDays}>
            {
                next5days.map(day => (
                    <Day className={style.day} key={day.date} {...day} />
                ))
            }
        </section>
    )
}