

module.exports = {


    before(app) {
        app.get('/api/get', (req, res) => {
            res.json(get)
        })

        app.post('/api/getMy', (req, res) => {
            res.json(getMy)
        })
        app.post('/api/success', (req, res) => {
            res.json(success)
        })

    }
}