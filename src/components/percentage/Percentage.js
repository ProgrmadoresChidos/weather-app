import React from 'react'
import style from './Percentage.module.css';
import PropTypes from 'prop-types';

export const Percentage = ({ percentage }) => {
    return (
        <div className={style.percentage__container}>
            <div className={style.percentage}>
                <div className={style.percentage__numbers}>
                    <div>0</div>
                    <div>50</div>
                    <div>100</div>
                </div>
                <div className={style.whiteRectangle}>
                    <div className={style.yellowRectangle} style={{
                        width: `${percentage}%`
                    }}>
                    </div>
                </div>
            </div>
        </div>

    )
}

Percentage.propTypes = {
    percentage: PropTypes.number.isRequired
}

