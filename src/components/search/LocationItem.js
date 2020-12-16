import { useState } from 'react';
import style from './Search.module.css';

export const LocationItem = ({ location, style: customStyle }) => {
  const [mouseOver, setMouseOver] = useState(false);
  const handleMouseOver = () => {
    setMouseOver(true);
  };
  const handleMouseLeave = () => {
    setMouseOver(false);
  };
  return (
    <div className={style.locationItem} style={customStyle} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <p>{location}</p>
      { mouseOver ? <i className="material-icons md-18">keyboard_arrow_right</i> : null}
    </div>
  )
}
