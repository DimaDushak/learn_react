import { render } from '@testing-library/react';
import React from 'react';
import Header from '../Header';

test('should render Header (snapshot)', () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toMatchSnapshot();
});
