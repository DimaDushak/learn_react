import { render } from '@testing-library/react';
import React from 'react';
import Icon, { EIcons } from '../Icon';

test('should render Icon (snapshot)', () => {
    const { container } = render(<Icon name={EIcons.hide} width={16} />);

    expect(container.firstChild).toMatchSnapshot();
});
