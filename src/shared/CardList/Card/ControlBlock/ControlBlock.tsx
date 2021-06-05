import React from 'react';
import {
    ArrowIcon,
    ChartIcon,
    MessageIcon,
    ShareIcon,
    TrashBinIcon,
} from '../../../Icons';
import styles from './controlblock.css';

export default function ControlBlock(): JSX.Element {
    return (
        <div className={styles.controlBlock}>
            <div>
                <button type="button" className={styles.upButton}>
                    <ArrowIcon />
                </button>
                <span className={styles.voteCount}>101</span>
                <button type="button" className={styles.downButton}>
                    <ArrowIcon />
                </button>
            </div>
            <div>
                <button type="button" className={styles.messageButton}>
                    <MessageIcon />
                </button>
                <span>14</span>
            </div>
            <div>
                <button type="button" className={styles.roundButton}>
                    <ChartIcon />
                </button>
                <button type="button" className={styles.roundButton}>
                    <ShareIcon />
                </button>
                <button type="button" className={styles.roundButton}>
                    <TrashBinIcon />
                </button>
            </div>
        </div>
    );
}
