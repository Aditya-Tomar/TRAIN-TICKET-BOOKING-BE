const express = require("express");
const { SeatsApi } = require("../../../apis/seats-api/seats-api")

class SeatsRouter {

    constructor(){}

    initRoutes() {
        const router = express.Router();
        
        //Endpoint to provide data of train seats.
        router.get("/details", SeatsApi.seatsDetails );

        return router;
    }
}
module.exports.SeatsRouter = SeatsRouter;