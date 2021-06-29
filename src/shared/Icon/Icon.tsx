import React from 'react';
import * as Icons from '../Icons';

export enum EIcons {
    arrow = 'ArrowIcon',
    chart = 'ChartIcon',
    hide = 'HideIcon',
    menu = 'MenuIcon',
    message = 'MessageIcon',
    save = 'SaveIcon',
    share = 'ShareIcon',
    trashBin = 'TrashBinIcon',
    warning = 'WarningIcon',
}

interface Props {
    name: EIcons;
    width: number;
    height?: number;
    viewBox?: string;
    className?: string;
}

export default function Icon({
    name,
    width,
    height = width,
    viewBox = `0 0 ${width} ${height}`,
    className,
}: Props): JSX.Element {
    const Path = Icons[name];

    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path />
        </svg>
    );
}
