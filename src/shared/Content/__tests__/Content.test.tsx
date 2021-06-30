import { render } from '@testing-library/react';
import React from 'react';
import Content from '../Content';

test('should render Content (snapshot)', () => {
    const { container } = render(<Content>Контент</Content>);

    expect(container.firstChild).toMatchSnapshot();
});
