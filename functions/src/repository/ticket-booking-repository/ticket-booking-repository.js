// THIS FILE IS ONLY TO PERFORM OPERATION RELATED TO DATABASE ( or DATABASE INTERACTION ).
const { TrainModel } = require("../../models/train-model/train-model");
// THIS FILE IS TO INTERACT WITH AND PERFORM DB RELATED OPERATIONS
class TrainRepository {

    static model = TrainModel;
    constructor(){}

    // This method will perform db operation update value in database
    // Return the array of booked seats Number.
    static async ticketBooking(params){

        const bookedTicketNumber = [];
        let numOfTickets = params.noOfTickets;

        const trainCoach = await this.model.find({});
        const seats = trainCoach[0].seats;
        trainCoach[0].availableSeats -= numOfTickets;

        for(let i=0;i< seats.length && numOfTickets; i++){
            if(!seats[i].isBooked){
                seats[i].isBooked = true;
                bookedTicketNumber.push(seats[i].number);
                numOfTickets--;
            }
        }
        
        await this.model.updateOne({}, {
            ["$set"]: {
                "seats": seats,
                "availableSeats": trainCoach[0].availableSeats,
            }
        });
        return bookedTicketNumber;
    }

    // Fetch train coach details and return it.
    static async seatsDetails() {
        const trainData = await this.model.find();
        return trainData;
    }
}

module.exports.TrainRepository = TrainRepository;