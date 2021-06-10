import React from 'react';

export interface GenericListProps {
    list: {
        id: string;
        children: React.ReactNode;
        As?: 'li' | 'a' | 'div' | 'button';
        className?: string;
        onClick?: () => void;
        href?: string;
    }[];
}

export default function GenericList({ list }: GenericListProps): JSX.Element {
    return (
        <>
            {list.map(
                ({ id, children, As = 'li', className, onClick, href }) => (
                    <As
                        key={id}
                        className={className}
                        onClick={onClick}
                        href={href}
                    >
                        {children}
                    </As>
                ),
            )}
        </>
    );
}
