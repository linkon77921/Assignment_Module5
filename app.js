
//App.js

let http = require('http');
let fs = require('fs');

let server = http.createServer(function (req, res) {
    let url = req.url;
    if (url === '/') {
        let data = fs.readFileSync('home.html', 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else if (url === '/about') {
        let data = fs.readFileSync('about.html', 'utf8');

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else if (url === '/contact') {
        let data = fs.readFileSync('contact.html', 'utf8');

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else if (req.url === '/file-write') {
        // Create a file named "demo.txt" and write "hello world" to it
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error writing to file');
            } else {
                res.end('File "demo.txt" created and "hello world" written to it');
            }
        });
    }
});

server.listen(8070, () => {
    console.log('Listening on port 8099');
});
