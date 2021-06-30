import { render } from '@testing-library/react';
import React from 'react';
import Layout from '../Layout';

test('should render Layout (snapshot)', () => {
    const { container } = render(<Layout>Верстка</Layout>);

    expect(container.firstChild).toMatchSnapshot();
});
