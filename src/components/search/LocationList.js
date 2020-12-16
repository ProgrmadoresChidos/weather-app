import style from './Search.module.css';
import { LocationItem } from './LocationItem';

const locationList = [
  {
    location: 'London',
  },
  {
    location: 'Barcelona',
  },
  {
    location: 'Long Beach',
  },
];

export const LocationList = () => {
  return (
    <div className={style.locationList}>
      {
        locationList.map((item, index) => (
          <LocationItem key={item.location} location={item.location} style={index === (locationList.length) - 1 ? {} : { marginBottom: 28 }} />
        ))
      }
    </div>
  )
}
