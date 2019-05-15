const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const vehicleRoutes = express.Router();
const PORT = 4000;
let Vehicle = require('./vehicles.model');
let Vehicles=require('./user');
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/vehicleData', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
vehicleRoutes.route('/').get(function(req, res) {
    Vehicle.find(function(err, vehicleData) {
        if (err) {
            console.log(err);
        } else {
            res.json(vehicleData);
        }
    });
});

vehicleRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Vehicle.findById(id, function(err, data) {
        res.json(data);
    });
});

vehicleRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Vehicle.findById(id, function (err, vehicle){
      res.json(vehicle);
      
  });

});
vehicleRoutes.route('/update/:id').post(function(req, res) {
    Vehicle.findById(req.params.id, function(err, vehicle) {
        if (!vehicle)
            res.status(404).send("data is not found");
        else{
            vehicle.vehicle_type = req.body.vehicle_type;
            vehicle.vehicle_condition = req.body.vehicle_condition;
            vehicle.available_date= req.body.available_date;
            vehicle.rate = req.body.rate;
            vehicle.location_preference = req.body.location_preference;
            vehicle.vehicle_booked= req.body.vehicle_booked;

            vehicle.save().then(vehicle =>{
                res.json('Vehicle updated!');
            
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        } 
    });
});





vehicleRoutes.route('/add').post(function(req, res) {
    let vehicle = new Vehicle(req.body);
    vehicle.save()
        .then(vehicle => {
            res.status(200).json({'vehicle': 'vehicle added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new vehicle failed');
        });
    });

vehicleRoutes.route('/delete/:id').get(function (req, res) {
    Vehicle.findByIdAndRemove({_id: req.params.id}, function(err, vehicle){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});


app.use('/vehicleData', vehicleRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});



