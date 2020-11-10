const http = require('http')
const PORT = process.env.PORT || 9000
http
  .createServer((req, res) => {
    console.log('New connection-ci-cd - revision  4')
    res.end('Hello Cloud Run with CI/CD - revision  4')
  })
  .listen(PORT, () => console.log('Listening on', PORT))
