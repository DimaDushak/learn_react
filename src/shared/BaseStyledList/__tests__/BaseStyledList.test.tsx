import { render } from '@testing-library/react';
import React from 'react';
import dropdownList from '../../CardList/Card/CardDropdown/dropdownList';
import BaseStyledList from '../BaseStyledList';

test('should render BaseStyledList (snapshot)', () => {
    const { container } = render(<BaseStyledList list={dropdownList} />);

    expect(container).toMatchSnapshot();
});
