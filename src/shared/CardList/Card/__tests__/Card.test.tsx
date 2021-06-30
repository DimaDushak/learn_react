import { render } from '@testing-library/react';
import React from 'react';
import Card from '../Card';

test('should render Card (snapshot)', () => {
    const { container } = render(<Card />);

    expect(container.firstChild).toMatchSnapshot();
});
