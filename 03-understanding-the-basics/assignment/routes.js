const requestHandler = (req, res) => { 
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Welcome</title></head>')
        res.write('<body>')
        res.write('<h1>Welcome to my page!</h1>')
        res.write('<form action="/create-user" method="POST">')
        res.write('<input type="text" name="username">')
        res.write('<button type="submit">Send</button>')
        res.write('</form')
        res.write('</body')
        res.write('</html>');
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Users</title></head>')
        res.write('<body>')
        res.write('<ul>')
        res.write('<li>User 1</li>')
        res.write('<li>User 2</li>')
        res.write('<li>User 3</li>')
        res.write('<li>User 4</li>')
        res.write('<li>User 5</li>')
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>');
    }

    if(url === '/create-user' && method === 'POST')
    {
        req.on('data', (chunk) => {
            console.log(chunk.toString());
        });
        req.on('end', () => {
            res.statusCode = 302;
            res.setHeader('Location', '/users');
            res.end();
        });
    }
}

module.exports.handler = requestHandler;

