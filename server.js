const http = require('http')
const PORT = process.env.PORT || 9000
http
  .createServer((req, res) => {
    console.log('New connection-ci-cd - revision 2')
    res.end('Hello Cloud Run with CI/CD - revision 2')
  })
  .listen(PORT, () => console.log('Listening on', PORT))
