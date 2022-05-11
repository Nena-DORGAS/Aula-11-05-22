//rota para o index.ejs
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send("FUNCIONOU!")
    })
}