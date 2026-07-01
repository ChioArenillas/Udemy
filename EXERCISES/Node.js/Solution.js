const http = require('http')

const server = http.createServer((req , res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/')
    {
        res.setHeader('Content-Type','text/html')
        res.write
        (`
            <html>
                <head>
                    <title> My Website </title>
                </head>
                <body>
                    <h1> Welcome to My Node.Js </h1>
                    <form action ="/Create-user" method="POST"> 
                        <input type="text" name="message"><button type="submit">Send</button></form>
                    </form>
                </body>
            </html>
            
        `)
        return res.end();
    }
    if(url === '/Create-user' && method === 'POST')
    {
        const body = [];
        req.on('data',(chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',() => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
             res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
       
    }
     if (url === '/user') {

        res.write(`
            <html>
                <head>
                    <title> Users </title>
                </head>
                <body>
                    <ul>
                        <li> user1 user2 user3 </li>
                    </ul>
                </body>
            </html>
        `);

        return res.end();
    }
});

server.listen(3000)