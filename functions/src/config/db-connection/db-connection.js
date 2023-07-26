const DbEnvironment = require("./dbEnvironmentSetup");
const { MongooseWrapper } = require("./mongoose-wrapper");

// connecting with database
async function main(){
    const dbEnv = new DbEnvironment();
    MongooseWrapper.db = await MongooseWrapper.mongooseDb.connect(dbEnv.uri,  dbEnv.option );
}

async function connect(){
    await main().catch(err => { throw new Error(err) });
}

module.exports = connect;


