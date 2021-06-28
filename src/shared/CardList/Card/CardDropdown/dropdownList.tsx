import React from 'react';
import assignId from '../../../../utils/js/assoc';
import { HideIcon, WarningIcon } from '../../../Icons';
import ListItemContent from '../../../ListItemContent';

const dropdownList = [
    {
        children: <ListItemContent svg={<HideIcon />} text="Cкрыть" />,
    },
    {
        children: <ListItemContent svg={<WarningIcon />} text="Пожаловаться" />,
    },
].map(assignId);

export default dropdownList;
