const mongoose = require("mongoose");


class MongooseWrapper {
    constructor(){}

    static mongooseDb = mongoose;
    static db;
}

module.exports.MongooseWrapper =  MongooseWrapper;