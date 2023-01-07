const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3001;
const server = express();

// Have Node serve the files for our built React app
server.use(express.static(path.resolve(__dirname, '../app/build')));

server.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

// All other GET requests not handled before will return our React app
server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../app/build', 'index.html'));
});

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
