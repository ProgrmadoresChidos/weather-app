import React from 'react'
import style from './Highlight.module.css';
import PropTypes from 'prop-types';

export const HighlightItem = ({ title, value, unit, children }) => {
  return (
    <div className={style.highlightItem}>
      <div className={style.highlightItem__container}>
        <div className={style.highlightItem__header}>
          <h3 className={style.highlightItem__title}>{title}</h3>
        </div>
        <div className={style.highlightItem__measure}>
          <h2 className={style.highlightItem__number}>{value}</h2>
          <label className={style.highlightItem__unit}>{unit}</label>
        </div>
        {children}
      </div>
    </div>
  )
}

HighlightItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
}
