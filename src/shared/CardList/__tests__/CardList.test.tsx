import { render } from '@testing-library/react';
import React from 'react';
import CardsList from '../CardsList';

test('should render CardsList (snapshot)', () => {
    const { container } = render(<CardsList />);

    expect(container.firstChild).toMatchSnapshot();
});
