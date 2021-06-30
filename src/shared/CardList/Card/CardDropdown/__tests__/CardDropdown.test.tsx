import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import CardDropdown from '../CardDropdown';

describe('CardDropdown', () => {
    test('should render (snapshot)', () => {
        const { container } = render(<CardDropdown />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('should render after button click (snapshot)', () => {
        const { container } = render(<CardDropdown />);

        userEvent.click(screen.getByRole('button'));

        expect(container.firstChild).toMatchSnapshot();
    });
});
