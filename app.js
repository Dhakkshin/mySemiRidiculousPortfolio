const express = require('express');

const app = express();
app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname});
});

app.get('/projects', (req, res) => {
    res.sendFile('./views/projects.html', {root: __dirname});
});

app.get('/contact', (req, res) => {
    res.sendFile('./views/contact.html', {root: __dirname});
});

app.get('/resume', (req, res) => {
    res.sendFile('./views/resume.html', {root: __dirname});
});

app.use((req, res) => {
    res.statusCode = 404;
    res.sendFile('./views/404.html', {root: __dirname})
});