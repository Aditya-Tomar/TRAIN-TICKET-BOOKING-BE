const { TicketBookingRouter } = require("./ticket-booking-router/ticket-booking-router");
const { SeatsRouter } = require("./seats-router/seats-router");

class Routes {

    constructor(app){
        this.app=app;
        this.init();
    }

    init(){
        this.app.use("/api/train/ticket", new TicketBookingRouter().initRoutes() );
        this.app.use("/api/train/seats", new SeatsRouter().initRoutes() );
    }

}

module.exports = Routes;