import { render } from '@testing-library/react';
import React from 'react';
import ControlBlock from '../ControlBlock';

test('should render ControlBlock (snapshot)', () => {
    const { container } = render(<ControlBlock />);

    expect(container.firstChild).toMatchSnapshot();
});
