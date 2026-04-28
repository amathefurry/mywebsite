const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;
const HOST = 'localhost';
const API_ROOT_URL = process.env.API_ROOT_URL;
const API_KEY = process.env.API_KEY;
const USERNAME = 'amathecutefurry';

app.use('/stats', createProxyMiddleware({
    target: `http://${API_ROOT_URL}?method=user.getinfo&user=${USERNAME}&api_key=${API_KEY}&/`,
    changeOrigin: true,
    pathRewrite: {
        [`^/stats`]: '',
    },
}));
app.use('/recent', createProxyMiddleware({
    target: `http://${API_ROOT_URL}?method=user.getRecentTracks&user=${USERNAME}&api_key=${API_KEY}&/`,
    changeOrigin: true,
    pathRewrite: {
        [`^/recent`]: '',
    },
}));
app.use('/tt', createProxyMiddleware({
    target: `http://${API_ROOT_URL}?method=user.getTopTracks&user=${USERNAME}&api_key=${API_KEY}&/`,
    changeOrigin: true,
    pathRewrite: {
        [`^/tt`]: '',
    },
}));
app.use('/ta', createProxyMiddleware({
    target: `http://${API_ROOT_URL}?method=user.getTopAlbums&user=${USERNAME}&api_key=${API_KEY}&/`,
    changeOrigin: true,
    pathRewrite: {
        [`^/ta`]: '',
    },
}));
app.use('/tar', createProxyMiddleware({
    target: `http://${API_ROOT_URL}?method=user.getTopArtists&user=${USERNAME}&api_key=${API_KEY}&/`,
    changeOrigin: true,
    pathRewrite: {
        [`^/tar`]: '',
    },
}));

app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});