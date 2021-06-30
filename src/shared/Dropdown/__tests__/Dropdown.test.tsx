import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Dropdown from '../Dropdown';

describe('Dropdown', () => {
    test('should render (snapshot)', () => {
        const { container } = render(
            <Dropdown button={<button type="button">Нажми</button>}>
                <ul>Список</ul>
            </Dropdown>,
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    test('render after button click (snapshot)', () => {
        const { container } = render(
            <Dropdown button={<button type="button">Нажми</button>}>
                <ul>Список</ul>
            </Dropdown>,
        );

        userEvent.click(screen.getByRole('button'));

        expect(container.firstChild).toMatchSnapshot();
    });

    test('should work', () => {
        render(
            <Dropdown button={<button type="button">Нажми</button>}>
                <ul>Список</ul>
            </Dropdown>,
        );

        expect(screen.queryByRole('list')).toBeNull();

        const button = screen.getByRole('button');

        userEvent.click(button);

        expect(screen.getByRole('list')).toBeInTheDocument();

        userEvent.click(button);

        expect(screen.queryByRole('list')).toBeNull();

        userEvent.click(button);
        userEvent.click(screen.getByRole('list'));

        expect(screen.queryByRole('list')).toBeNull();
    });

    test('should work controlled (check prop isOpen)', () => {
        render(
            <Dropdown
                button={<button type="button">Нажми</button>}
                isOpen={false}
            >
                <ul>Список</ul>
            </Dropdown>,
        );

        userEvent.click(screen.getByRole('button'));

        expect(screen.queryByRole('list')).toBeNull();
    });

    test('shoud work controlled (check props onOpen and onClose)', () => {
        const onOpen = jest.fn();
        const onClose = jest.fn();

        render(
            <Dropdown
                button={<button type="button">Нажми</button>}
                onOpen={onOpen}
                onClose={onClose}
            >
                <ul>Список</ul>
            </Dropdown>,
        );

        const button = screen.getByRole('button');

        expect(onClose).toBeCalledTimes(0);

        userEvent.click(button);

        expect(onOpen).toBeCalled();

        userEvent.click(button);

        expect(onClose).toBeCalledTimes(1);
    });

    test('check prop listClassName', () => {
        render(
            <Dropdown
                button={<button type="button">Нажми</button>}
                listClassName="changedlistPosition"
                isOpen
            >
                <ul>Список</ul>
            </Dropdown>,
        );

        expect(screen.getByRole('list').parentElement).toHaveClass(
            'changedlistPosition',
        );
    });
});
