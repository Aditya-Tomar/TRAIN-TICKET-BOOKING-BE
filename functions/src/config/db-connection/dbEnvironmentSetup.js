

class DbEnvironment {

    constructor(){
        this.initializeEnvsetup();
    }

    initializeEnvsetup(){
        this.uri = process.env.DBURI || "mongodb://127.0.0.1:27017/railway";
        this.option = {
            dbName: process.env.DBNAME || "railway",
            autoIndex: false,
            maxPoolSize: 100,
            serverSelectionTimeoutMS: 30000,

        }
    }
}

module.exports = DbEnvironment;