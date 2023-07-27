

class DbEnvironment {

    constructor(){
        this.initializeEnvsetup();
    }

    initializeEnvsetup(){
        this.uri = process.env.DB_URI || "mongodb://127.0.0.1:27017/railway" ;
        this.option = {
            dbName: process.env.DB_NAME || "railway",
            autoIndex: false,
            maxPoolSize: 100,
            serverSelectionTimeoutMS: 30000,
        }
    }
}

module.exports = DbEnvironment;