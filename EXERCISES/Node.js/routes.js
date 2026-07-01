const fs = require('fs')

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write(`
            <html>
                <head>
                <title>Hello</title>
                </head>
                    <body>
                        <h1>Welcome User</h1>
                        <form action="/create-user" method="POST">
                            <input type="text" name="users">
                                <button type="submit">Create Username </button>
                        </form>
                    </body>
            </html>
            `)
        return res.end()
    }
    if (url === '/users') {
        res.write
        (`
            <html>
                <head>
                    <title> Users </title>
                </head>
                <body>
                    <ul>
                        <li> user1 </li>
                        <li> user2 </li>
                        <li> user3 </li>
                    </ul>
                </body>
            </html>
        `);
        return res.end()
    }

    if (url === "/create-user" && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString()
            const users = parseBody.split('=')[1]
            fs.writeFile('users.txt', users, (err) => {
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            })
        })
    }
    return res.end()
}

module.exports = requestHandler