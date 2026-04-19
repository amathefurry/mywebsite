const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;
const HOST = 'localhost';
const API_ROOT_URL = process.env.API_ROOT_URL;
const API_KEY = process.env.API_KEY;
var API_PARAMETERS = 'user.getinfo&user=amathecutefurry'

var API_SERVICE_URL = `${API_ROOT_URL}?method=${API_PARAMETERS}&api_key=${API_KEY}&`

app.use('/stats', createProxyMiddleware({
    target: `http://${API_SERVICE_URL}`,
    changeOrigin: true,
    pathRewrite: {
        [`^/stats`]: '',
    },
}));

app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
    console.log(`API_URL is  ${API_SERVICE_URL}`);
});