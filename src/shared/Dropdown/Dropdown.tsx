/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useIsMounted } from '../../utils/hooks';
import styles from './dropdown.css';

interface Props {
    button: React.ReactNode;
    children: React.ReactNode;
    listClassName?: string;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

export default function Dropdown({
    button,
    children,
    listClassName = styles.listPosition,
    isOpen,
    onOpen,
    onClose,
}: Props): JSX.Element {
    const [isDropdownOpen, setIsDropDownOpen] = React.useState(isOpen);

    const isMounted = useIsMounted();

    React.useEffect(() => setIsDropDownOpen(isOpen), [isOpen]);

    React.useEffect(() => {
        if (isMounted) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            isDropdownOpen ? onOpen?.() : onClose?.();
        }
    }, [isDropdownOpen]);

    const handleOpen = () => {
        if (isOpen === undefined) {
            setIsDropDownOpen((prevState) => !prevState);
        }
    };

    return (
        <div className={styles.container}>
            <div onClick={handleOpen}>{button}</div>
            {isDropdownOpen && (
                <div className={styles.listContainer}>
                    <div
                        className={`${listClassName} ${styles.list}`}
                        onClick={() => setIsDropDownOpen(false)}
                    >
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}
