import React from 'react';
import { Percentage } from '../percentage/Percentage';
import style from './Highlight.module.css';
import { HighlightItem } from './HighlightItem'

export const Highlight = () => {
  return (
    <section className={style.highlight}>
      <div className={style.highlight__container}>
        <div className={style.highlight__header}>
          <h1 className={style.highlight__title}>Today's Highlights</h1>
        </div>
        <div className={style.highlight__weather}>
          <HighlightItem title="Wind Status" value={765} unit="mph" >
            <div className={style.wind}>
              <i className="material-icons">toys</i>
              <p>WSW</p>
            </div>
          </HighlightItem>
          <HighlightItem title="humidity" value={84} unit="%" >
            <Percentage percentage={85} />
          </HighlightItem>
          <HighlightItem title="visibility" value={6.4} unit="miles" />
          <HighlightItem title="air pressure" value={998} unit="mb" />
        </div>
      </div>
    </section>
  )
}
