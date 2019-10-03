const getMy = require('./getMy.json')
const success = require('./success.json')
const get = require('./get.json')

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