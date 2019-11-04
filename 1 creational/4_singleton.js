class Database {
    constructor(data) {
        if (Database.exixsts) {
            return Database.instance
        }
        Database.instance = this
        Database.exixsts = true
        this.data = data
    }

    getData() {
        return this.data
    }
}

const mongo = new Database('MongoDB')
console.log(mongo.getData())

const mysql = new Database('MySQl')
console.log(mysql.getData())
