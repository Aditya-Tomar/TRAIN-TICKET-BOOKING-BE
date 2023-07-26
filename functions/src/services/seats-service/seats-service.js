const { TrainRepository } = require("../../repository/ticket-booking-repository/ticket-booking-repository");

class SeatsService {

    constructor(){}

    static async seatsDetails(){ 
        return TrainRepository.seatsDetails();
    }
}

module.exports.SeatsService = SeatsService;