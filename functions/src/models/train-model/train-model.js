const { MongooseWrapper } = require('../../config/db-connection/mongoose-wrapper');


const TrainSchema = new MongooseWrapper.mongooseDb.Schema({
    coachName : { type: String, required: true },
    totalSeats: { type: Number, default: 80 },
    availableSeats: { type: Number, default: 80 },
    seats: [{
        number: { type: Number, required: true },
        isBooked: { type: Boolean, required: true },
        // status: { type: String,
        //     enum : ['BOOKED', 'AVAILABLE'],
        //     default: 'AVAILABLE'
        // },
    }]
});

const Model = MongooseWrapper.mongooseDb.model("Train", TrainSchema);
module.exports.TrainModel =  Model;
