import { render } from '@testing-library/react';
import React from 'react';
import TitleBlock from '../TitleBlock';

test('should render TitleBlock (snapshot)', () => {
    const { container } = render(<TitleBlock />);

    expect(container.firstChild).toMatchSnapshot();
});
