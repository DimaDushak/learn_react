import { render } from '@testing-library/react';
import React from 'react';
import UserBlock from '../UserBlock';

describe('UserBlock', () => {
    test('should render UserBlock without optional props (snapshot)', () => {
        const { container } = render(<UserBlock />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('should render UserBlock with optional props (snapshot)', () => {
        const { container } = render(
            <UserBlock
                link="#link"
                avatarSrc="#avatarSrc"
                userName="Дмитрий"
                className="testClass"
            />,
        );

        expect(container.firstChild).toMatchSnapshot();
    });
});
