const mongodb = require('mongodb')
const getDb = require('../util/database').getDb 

class User {
    constructor(username, email){
        this.name = username;
        this.email = email
        this._id = id ? new mongodb.ObjectId(id) : null
    }

    save(){
        const db = getDb()
        return db.collection('users').updateOne(this)
    }

    static findById(userId){
        const db = getDb()
        return db
            .collection('users')
            .find({_id: new mongodb.ObjectId(userId)})
            .next()
            .then(user => {
                console.log(user)
                return user
            })
            .catch(err => {
                console.log(err)
            })
    }}

module.exports = User