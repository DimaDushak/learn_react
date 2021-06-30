import { render } from '@testing-library/react';
import React from 'react';
import SortBlock from '../SortBlock';

test('should render SortBlock (snapshot)', () => {
    const { container } = render(<SortBlock />);

    expect(container.firstChild).toMatchSnapshot();
});
