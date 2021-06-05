import React from 'react';
import { hot } from 'react-hot-loader/root';
import CardList from './CardList';
import Content from './Content';
import Header from './Header';
import Layout from './Layout';
import './main.global.css';

function App(): JSX.Element {
    return (
        <Layout>
            <Header />
            <Content>
                <CardList />
            </Content>
        </Layout>
    );
}

export default hot(App);
