import React from 'react';
import merge from '../../../../utils/js/merge';
import BaseStyledList from '../../../BaseStyledList';
import listStyles from '../../../BaseStyledList/basestyledlist.css';
import Dropdown from '../../../Dropdown';
import { MenuIcon } from '../../../Icons';
import styles from './carddropdown.css';
import dropdownList from './dropdownList';

export default function CardDropdown(): JSX.Element {
    return (
        <div className={styles.container}>
            <Dropdown
                button={
                    <button type="button" className={styles.menuButton}>
                        <MenuIcon />
                    </button>
                }
                listClassName={styles.listPosition}
            >
                <BaseStyledList
                    list={dropdownList.map(
                        merge({ className: listStyles.white }),
                    )}
                    className={styles.dropdownList}
                />
            </Dropdown>
        </div>
    );
}
