const { TrainRepository } = require('../../repository/ticket-booking-repository/ticket-booking-repository');

class TicketBookingService {

    constructor(){}

    static async ticketBooking(params){ 
        return TrainRepository.ticketBooking(params);
    }
}

module.exports.TicketBookingService = TicketBookingService;