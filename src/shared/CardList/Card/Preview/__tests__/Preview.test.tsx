import { render } from '@testing-library/react';
import React from 'react';
import Preview from '../Preview';

test('should render Preview (snapshot)', () => {
    const { container } = render(<Preview />);

    expect(container.firstChild).toMatchSnapshot();
});
