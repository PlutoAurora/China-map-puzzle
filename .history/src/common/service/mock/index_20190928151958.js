const searchHot = require('./searchHot.json')
const question = require('./question.json')


module.exports = {

    before(app) {
        // search
        app.get('/api/search/hot', (req, res) => {
            res.json(searchHot)
        })

        app.post('/api/questions', (req, res) => {
            res.sendStatus(201)
            res.json(question)
        })

    }
}