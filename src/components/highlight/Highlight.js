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
          <HighlightItem >
            <Percentage />
          </HighlightItem>
        </div>
      </div>
    </section>
  )
}
