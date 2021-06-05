import React from 'react';
import styles from './preview.css';

export default function Preview(): JSX.Element {
    return (
        <div className={styles.preview}>
            <img
                className={styles.previewImage}
                alt="#"
                src="/static/fonts/Rectangle.png"
            />
        </div>
    );
}
