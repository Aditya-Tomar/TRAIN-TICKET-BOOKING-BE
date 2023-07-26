const express = require("express");
const { SeatsApi } = require("../../../apis/seats-api/seats-api")

class SeatsRouter {

    constructor(){}

    initRoutes() {
        const router = express.Router();
        

        router.get("", SeatsApi.a)
        router.get("/a", SeatsApi.aa())
        //Endpoint to provide data of train seats.
        router.get("/details", SeatsApi.seatsDetails );
        return router;
    }
}
module.exports.SeatsRouter = SeatsRouter;