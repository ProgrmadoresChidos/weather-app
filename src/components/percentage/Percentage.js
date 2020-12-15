import React from 'react'
import style from './Percentage.module.css';
import PropTypes from 'prop-types';

export const Percentage = ({ percentage }) => {
    return (

        <div>
            
            <div className={style.whiteRectangle}>
            <div className={style.styleNumbers}>0</div>
            <div className={style.styleNumbers}>50</div>
            <div className={style.stylenumbers}>100</div>

                <div className={style.yellowRectangle} style={{
                    width: percentage
                }}>
                </div>
            </div>
        </div>

    )
}

Percentage.propTypes = {
    percentage: PropTypes.number.isRequired
}