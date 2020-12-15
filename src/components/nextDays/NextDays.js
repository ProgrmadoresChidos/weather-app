import style from './NextDays.module.css';
import { Day } from './Day';
import moment from 'moment';

export const NextDays = () => {
    const now = moment();
    return (
        <section className={style.nextDays}>
            <Day className={style.day} date={now.format()} weather={'sn'} maxTemp={16} minTemp={11} />
            <Day className={style.day} date={now.add({ days: 1 }).format()} weather={'sl'} maxTemp={16} minTemp={11} />
            <Day className={style.day} date={now.add({ days: 2 }).format()} weather={'h'} maxTemp={16} minTemp={11} />
            <Day className={style.day} date={now.add({ days: 3 }).format()} weather={'t'} maxTemp={16} minTemp={11} />
            <Day className={style.day} date={now.add({ days: 4 }).format()} weather={'hr'} maxTemp={16} minTemp={11} />
        </section>
    )
}