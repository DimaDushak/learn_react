import { render } from '@testing-library/react';
import React from 'react';
import TextBlock from '../TextBlock';

test('should render TextBlock (snapshot)', () => {
    const { container } = render(<TextBlock />);

    expect(container.firstChild).toMatchSnapshot();
});
