const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const mongoConnect = callback => {
    MongoClient.connect(
        'mongodb+srv://timi_otull:<FYmtnoDq7GzR7YwN>@cluster0.oyi0bol.mongodb.net/'
    )
        .then(client => {
            console.log('Connected!')
            callback(client)
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = mongoConnect