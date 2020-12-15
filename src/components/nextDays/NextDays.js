import style from './NextDays.module.css';
import { Day } from './Day';

export const NextDays = () => {
    return (
        <section className={style.nextDays}>
            <Day className={style.day} date={'tomorrow'} weather={'sn'} maxTemp={16} minTemp={11} />
            <Day className={style.day} date={'tomorrow'} weather={'sn'} maxTemp={16} minTemp={11} />
            <Day className={style.day} date={'tomorrow'} weather={'sn'} maxTemp={16} minTemp={11} />
            <Day className={style.day} date={'tomorrow'} weather={'sn'} maxTemp={16} minTemp={11} />
            <Day className={style.day} date={'tomorrow'} weather={'sn'} maxTemp={16} minTemp={11} />
        </section>
    )
}