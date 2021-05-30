import React from 'react';
import styles from './controlblock.css';

export default function ControlBlock(): JSX.Element {
    return (
        <div className={styles.controlBlock}>
            <div>
                <button type="button" className={styles.upButton}>
                    <svg
                        width="19"
                        height="10"
                        viewBox="0 0 19 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4" />
                    </svg>
                </button>
                <span className={styles.voteCount}>101</span>
                <button type="button" className={styles.downButton}>
                    <svg
                        width="19"
                        height="10"
                        viewBox="0 0 19 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4" />
                    </svg>
                </button>
            </div>
            <div>
                <button type="button" className={styles.messageButton}>
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z"
                            fill="#C4C4C4"
                        />
                    </svg>
                </button>
                <span>14</span>
            </div>
            <div>
                <button type="button" className={styles.roundButton}>
                    <svg
                        width="13"
                        height="8"
                        viewBox="0 0 13 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.1 0L10.5885 1.52667L7.4165 4.78L4.8165 2.11333L0 7.06L0.9165 8L4.8165 4L7.4165 6.66667L11.5115 2.47333L13 4V0H9.1Z"
                            fill="white"
                        />
                    </svg>
                </button>
                <button type="button" className={styles.roundButton}>
                    <svg
                        width="9"
                        height="10"
                        viewBox="0 0 9 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.66667 7.06827C6.32889 7.06827 6.02667 7.21888 5.79556 7.45482L2.62667 5.37149C2.64889 5.25602 2.66667 5.14056 2.66667 5.02008C2.66667 4.8996 2.64889 4.78414 2.62667 4.66867L5.76 2.60542C6 2.85643 6.31556 3.01205 6.66667 3.01205C7.40444 3.01205 8 2.33936 8 1.50602C8 0.672691 7.40444 0 6.66667 0C5.92889 0 5.33333 0.672691 5.33333 1.50602C5.33333 1.62651 5.35111 1.74197 5.37333 1.85743L2.24 3.92068C2 3.66968 1.68444 3.51406 1.33333 3.51406C0.595556 3.51406 0 4.18675 0 5.02008C0 5.85341 0.595556 6.5261 1.33333 6.5261C1.68444 6.5261 2 6.37048 2.24 6.11948L5.40444 8.20783C5.38222 8.31325 5.36889 8.42369 5.36889 8.53414C5.36889 9.34237 5.95111 10 6.66667 10C7.38222 10 7.96444 9.34237 7.96444 8.53414C7.96444 7.7259 7.38222 7.06827 6.66667 7.06827Z"
                            fill="white"
                        />
                    </svg>
                </button>
                <button type="button" className={styles.roundButton}>
                    <svg
                        width="8"
                        height="10"
                        viewBox="0 0 8 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.571429 8.88889C0.571429 9.5 1.08571 10 1.71429 10H6.28571C6.91429 10 7.42857 9.5 7.42857 8.88889V2.22222H0.571429V8.88889ZM1.71429 3.33333H6.28571V8.88889H1.71429V3.33333ZM6 0.555556L5.42857 0H2.57143L2 0.555556H0V1.66667H8V0.555556H6Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
