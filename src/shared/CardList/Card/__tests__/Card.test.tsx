import { render } from '@testing-library/react';
import React from 'react';
import Card from '../Card';

test('should render Card (snapshot)', () => {
    const post = {
        author: 'dima_dushak',
        created_utc: 1659515678,
        id: 'd3fgt4g',
        title: 'Заголовок',
        url: '#url',
    };

    const { container } = render(<Card post={post} />);

    expect(container.firstChild).toMatchSnapshot();
});
