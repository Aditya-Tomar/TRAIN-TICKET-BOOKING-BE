const { TicketBookingService } = require("../../services/ticket-booking-service/ticket-booking-service");

class TicketBookingApi {
    
    constructor(){}

    static ticketBooking(req, res) {
        const params = req.body;
        return TicketBookingService.ticketBooking(params).then( (resData) => {
            res.status(200).send(resData);
        }).catch(err => {
            console.log(err);
            res.status(500).send({message: "Error Occured at Server side"})
        });
    }
}

module.exports.TicketBookingApi = TicketBookingApi;