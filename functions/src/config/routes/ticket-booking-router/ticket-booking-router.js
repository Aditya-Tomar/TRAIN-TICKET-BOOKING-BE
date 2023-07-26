const express = require("express");
const { TicketBookingApi } = require("../../../apis/ticket-booking-api/ticket-booking-api");

class TicketBookingRouter {

    constructor(){}

    initRoutes() {
        const router = express.Router();
        
        // Endpoint to handle ticket booking

        router.post("/booking", TicketBookingApi.ticketBooking );

        return router;
    }
}

module.exports.TicketBookingRouter = TicketBookingRouter;