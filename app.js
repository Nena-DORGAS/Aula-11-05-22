const servidor = require('./Config/servidor')
const app = servidor.app
const porta = servidor.porta

const index = require('./routes/index')(app)

app.listen(porta)