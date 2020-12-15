import React from 'react'
import style from './Highlight.module.css';

export const HighlightItem = ({ children }) => {
  return (
    <div className={style.highlightItem}>
      <div className={style.highlightItem__container}>
        <div className={style.highlightItem__header}>
          <h3 className={style.highlightItem__title}>Wind status</h3>
        </div>
        <div className={style.highlightItem__measure}>
          <h2 className={style.highlightItem__number}>7mph</h2>
          itemasd
                {children}
        </div>
      </div>
    </div>
  )
}
