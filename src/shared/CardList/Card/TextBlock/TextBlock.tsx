/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './textblock.css';

export default function TextBlock(): JSX.Element {
    return (
        <div className={styles.textBlock}>
            <div className={styles.authorInfoBlock}>
                <div className={styles.linkBlock}>
                    <img
                        src="https://cdn.dribbble.com/users/2202649/avatars/small/2044ffe8e8848aeb80e514229c21c515.png?1616573826"
                        alt="#"
                        className={styles.authorAvatar}
                    />
                    <a href="#user" className={styles.authorLink}>
                        Константин Кодов
                    </a>
                </div>
                <span className={styles.publishTime}>
                    <span className={styles.publish}>опубликовано</span>8 часов
                    назад
                </span>
            </div>
            <h2 className={styles.postHeading}>
                <a href="#post" className={styles.postLink}>
                    Следует отметить, что новая модель организационной
                    деятельности и деятельности и деятельности и деятельности
                </a>
            </h2>
        </div>
    );
}
