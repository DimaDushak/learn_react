import axios from 'axios';
import express from 'express';
import ReactDOM from 'react-dom/server';
import App from '../shared/App';
import getFromServer from '../utils/js/getFromServer';
import indexTemplate from './indexTemplate';

const app = express();

app.use('/static', express.static('dist/client'));

app.get('/', (_req, res) => {
    res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.get('/auth', (req, res) => {
    const getToken = async () => {
        const { data } = await axios.post(
            'https://www.reddit.com/api/v1/access_token',
            `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
            {
                auth: {
                    username: process.env.CLIENT_ID as string,
                    password: 'OyvFAV1eIeALGUWV67VrexFoFLCqBQ',
                },
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                },
            },
        );

        res.send(
            indexTemplate(ReactDOM.renderToString(App()), data.access_token),
        );
    };

    getFromServer(getToken);
});

app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('Server started on http://localhost:3000');
});
