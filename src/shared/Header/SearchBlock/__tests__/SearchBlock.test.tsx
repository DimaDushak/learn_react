import { render } from '@testing-library/react';
import React from 'react';
import SearchBlock from '../SearchBlock';

test('should render SearchBlock (snapshot)', () => {
    const { container } = render(<SearchBlock />);

    expect(container.firstChild).toMatchSnapshot();
});
