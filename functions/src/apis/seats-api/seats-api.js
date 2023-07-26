const { SeatsService } = require("../../services/seats-service/seats-service");

class SeatsApi {
    constructor(){}

    static seatsDetails(req, res) {
        return SeatsService.seatsDetails().then( (resData) => {
            res.send(  resData );
        }).catch(err => {
            console.log(err);
            res.status(500).send({message: "Error occured at server side"});
        });
    }
}

module.exports.SeatsApi = SeatsApi;