import style from './NextDays.module.css';
import { Day } from './Day';

export const NextDays = () => {
    return (
        <section className={style.nextDays}>
            <Day className={style.day} date={'Tomorrow'} weather={'sn'} maxTemp={16} minTemp={11} />
            <Day className={style.day} date={'Sun, 7 Jun'} weather={'sl'} maxTemp={16} minTemp={11} />
            <Day className={style.day} date={'Mon, 8 Jun'} weather={'h'} maxTemp={16} minTemp={11} />
            <Day className={style.day} date={'Tue, 9 Jun'} weather={'t'} maxTemp={16} minTemp={11} />
            <Day className={style.day} date={'Wed, 10 Jun'} weather={'hr'} maxTemp={16} minTemp={11} />
        </section>
    )
}