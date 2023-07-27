const express = require("express");
const connect = require("./config/db-connection/db-connection");
const { MongooseWrapper } = require("./config/db-connection/mongoose-wrapper");
const cors = require("cors")
const bodyparser = require('body-parser');
const serverless = require("serverless-http")


class App {

    constructor(){}

    // This will initialize and start the application.
    // This method will create connection with Db.
    // Create express instance
    // Add middleware
    // Create Routes
    // And start listening at provided port number.
    async initializeApp(){
        console.log("Initializing Application...");
        this.createExpressApp();
        this.app.use(cors({
            origin: ['https://ttbooking.netlify.app'] 
        }));
        this.app.use(bodyparser.json());
        this.createRoutes();
        await this.connectToDB();
        this.startListening();
        this.errorHandler();
    }

    createExpressApp(){
        this.app = express();
    }

    async connectToDB(){

        MongooseWrapper.mongooseDb.connection.on('connecting', ()=> {
            console.log('Connecting with database.');
        });

        MongooseWrapper.mongooseDb.connection.on('error', (err)=> {
            console.log('Unable to connect with database : ', err);
        });

        MongooseWrapper.mongooseDb.connection.on('connected', () => {
            console.log("Application connected with database");
        });

        await connect();
    }

    createRoutes(){
        const Routes = require("./config/routes/routes")
        new Routes(this.app);
        console.log("Routes Configured");
    }

    startListening(){
        this.app.listen(process.env.PORT || 8889, () => {
            console.log("Server started listening at port ", process.env.PORT ?? 8889 );
        })
    }

    errorHandler(){
        this.app.use((err, req, res, next) => {
            console.log("Error handler executed");
            next(err);
        });
    }
}

const app = new App();
app.initializeApp();
module.exports.handler = serverless(app.app);

// module.exports.handler = async (context, req) => {
//   context.res = await handler(context, req);
// }