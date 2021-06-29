import React from 'react';
import BaseStyledList from '../../../BaseStyledList';
import Dropdown from '../../../Dropdown';
import Icon, { EIcons } from '../../../Icon';
import styles from './carddropdown.css';
import dropdownList from './dropdownList';

export default function CardDropdown(): JSX.Element {
    return (
        <div className={styles.container}>
            <Dropdown
                button={
                    <button type="button" className={styles.menuButton}>
                        <Icon name={EIcons.menu} width={20} height={5} />
                    </button>
                }
                listClassName={styles.listPosition}
            >
                <div className={styles.listContainer}>
                    <BaseStyledList list={dropdownList} />
                </div>
            </Dropdown>
        </div>
    );
}
