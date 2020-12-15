import style from './NextDays.module.css';

export const Day = ({ date, weather, maxTemp, minTemp }) => {
  return (
    <div className={style.day}>
      <p>{date}</p>
      <img src={`https://www.metaweather.com/static/img/weather/png/64/${weather}.png`} alt="weather" />
      <div className={style.tempWrapper}>
        <p>{maxTemp}°C</p>
        <p className={style.minTemp}>{minTemp}°C</p>
      </div>
    </div>
  )
}