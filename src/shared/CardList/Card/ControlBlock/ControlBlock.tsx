import React from 'react';
import Icon, { EIcons } from '../../../Icon';
import styles from './controlblock.css';

export default function ControlBlock(): JSX.Element {
    return (
        <div className={styles.controlBlock}>
            <div>
                <button type="button" className={styles.upButton}>
                    <Icon name={EIcons.arrow} width={19} height={10} />
                </button>
                <span className={styles.voteCount}>101</span>
                <button type="button" className={styles.downButton}>
                    <Icon name={EIcons.arrow} width={19} height={10} />
                </button>
            </div>
            <div>
                <button type="button" className={styles.messageButton}>
                    <Icon name={EIcons.message} width={14.17} />
                </button>
                <span>14</span>
            </div>
            <div>
                <button type="button" className={styles.roundButton}>
                    <Icon name={EIcons.chart} width={13} height={8} />
                </button>
                <button type="button" className={styles.roundButton}>
                    <Icon
                        name={EIcons.share}
                        width={8}
                        height={10}
                        className={styles.shareIcon}
                    />
                </button>
                <button type="button" className={styles.roundButton}>
                    <Icon name={EIcons.trashBin} width={8} height={10} />
                </button>
            </div>
        </div>
    );
}
