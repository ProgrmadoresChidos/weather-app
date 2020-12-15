import style from './NextDays.module.css';

export const Day = ({ date, weather, maxTemp, minTemp }) => {
  return (
    <div className={style.day}>
      <p>{date}</p>
      <p>{weather}</p>
      <div className={style.tempWrapper}>
        <p>{maxTemp}°C</p>
        <p>{minTemp}°C</p>
      </div>
    </div>
  )
}