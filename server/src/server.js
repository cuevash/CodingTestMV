// server.js
const app = require('./app')

// Listen in env given port
const port = process.env.port
app.listen(port, () => console.log(`Listening in the port ${port}... `))
