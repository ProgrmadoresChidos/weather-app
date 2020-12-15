import React from 'react'
import style from './Percentage.module.css';
import PropTypes from 'prop-types';

export const Percentage = ({ percentage }) => {
    return (
        <div>
            <div className={style.styleNumbers}>0</div>
            <div className={style.styleNumbers, style.positionFifty}>50</div>
            <div className={style.stylenumbers, style.positionFifty100}>100</div>
            <div className={style.whiteRectangle}>


                <div className={style.yellowRectangle} style={{
                    width: (percentage*100)/229
                }}>
                </div>
            </div>
        </div>
    )
}

Percentage.propTypes = {
    percentage: PropTypes.number.isRequired
}

