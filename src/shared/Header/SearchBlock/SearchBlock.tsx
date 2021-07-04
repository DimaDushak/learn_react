/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { userContext } from '../../context/userContext';
import UserBlock from '../../UserBlock';
import styles from './searchblock.css';

export default function SearchBlock(): JSX.Element {
    const userData = useContext(userContext);

    return (
        <div className={styles.searchBlock}>
            <UserBlock className={styles.userBlock} {...userData} />
        </div>
    );
}
