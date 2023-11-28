const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === '/set-cookie') {
    // Set a cookie with a 2-minute expiration
    const expirationTime = new Date(Date.now() + 2 * 60 * 1000); // 2 minutes
    const token = `loggedUser${reqUrl.pathname} ${Date.now().toLocaleString()}`;
    res.setHeader('Set-Cookie', `auth_next_token=${token}; HttpOnly; Expires=${expirationTime.toUTCString()}`);
    res.end('Cookie set');

  }
  else if (reqUrl.pathname === '/get-cookie') {
    // Get the token from the cookie
    const cookies = req.headers.cookie ? req.headers.cookie.split('; ') : [];
    let token;

    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === 'auth_next_token') {
        token = value;
        break;
      }
    }

    if (token) {
      res.end(`Token: ${token}`);
    } else {
      res.end('Token not found');
    }

  }
  else if (reqUrl.pathname === '/protected-route') {
    // Get the token from the cookie
    const cookies = req.headers.cookie ? req.headers.cookie.split('; ') : [];
    let token;

    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === 'auth_next_token') {
        token = value;
        break;
      }
    }

    if (token) {
      // Cookie found, the user is logged in
      res.end(`User details for token: ${token}`);
    } else {
      // Cookie not found, the user is not logged in
      res.statusCode = 401; // Unauthorized
      res.end('Unauthorized: User not logged in');
    }

  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
// myshopping : Alal23@&%
// email alalu7566@gmail.com

