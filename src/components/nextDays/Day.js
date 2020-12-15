import style from './NextDays.module.css';
import moment from 'moment';

export const Day = ({ date, weather, maxTemp, minTemp }) => {
  const formattedDate = moment(date).format('ddd, D MMM');
  return (
    <div className={style.day}>
      <p>{formattedDate}</p>
      <img src={`https://www.metaweather.com/static/img/weather/png/64/${weather}.png`} alt="weather" />
      <div className={style.tempWrapper}>
        <p>{maxTemp}°C</p>
        <p className={style.minTemp}>{minTemp}°C</p>
      </div>
    </div>
  )
}