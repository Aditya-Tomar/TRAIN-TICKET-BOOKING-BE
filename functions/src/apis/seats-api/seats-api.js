const { SeatsService } = require("../../services/seats-service/seats-service");

class SeatsApi {
    constructor(){}

    static a(req, res) {
        res.send("HEllo");
    }
    static aa(req, res) {
        res.send("World");
    }
    static seatsDetails(req, res) {
        // return SeatsService.seatsDetails().then( (resData) => {
            res.send(  "HEllo" );
        // }).catch(err => {
            // console.log(err);
            // res.status(500).send({message: "Error occured at server side"});
        // });
    }
}

module.exports.SeatsApi = SeatsApi;