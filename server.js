const http = require('http')
const PORT = process.env.PORT || 9000
http
  .createServer((req, res) => {
    console.log('New connection-ci-cd')
    res.end('Hello Cloud Run with CI/CD')
  })
  .listen(PORT, () => console.log('Listening on', PORT))
