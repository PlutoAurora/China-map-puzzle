const searchHot = require('./searchHot.json')
const questions = require('./questions.json')
const question = require('./question.json')
const questionAndAnswer = require('./questionAndAnswer.json')
const answer = require('./answer.json')
const api = require('./api.json')
const tagHot = require('./tagHot.json')
const image = require('./image.json')
const answers = require('./answers.json')
const userNew = require('./userNew.json')
const userOld = require('./userOld.json')

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