import React from 'react';
import { hot } from 'react-hot-loader/root';
import { useToken } from '../utils/hooks';
import CardList from './CardList';
import Content from './Content';
import tokenContext from './context/tokenContext';
import UserContextProvider from './context/userContext';
import Header from './Header';
import Layout from './Layout';
import './main.global.css';

function App(): JSX.Element {
    const token = useToken();

    return (
        <tokenContext.Provider value={token}>
            <UserContextProvider>
                <Layout>
                    <Header />
                    <Content>
                        <CardList />
                    </Content>
                </Layout>
            </UserContextProvider>
        </tokenContext.Provider>
    );
}

export default hot(() => <App />);
