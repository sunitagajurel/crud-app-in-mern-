vehicleRoutes.route('/update/:id').post(function (req, res) {
    Vehicle.findById(req.params.id, function(err, vehicle) {
    if (!vehicle)
      res.status(404).send("vehicle is not found");
    else {
            vehicle.vehicle_type = req.body.vehicle_type;
            vehicle.vehicle_condition = req.body.vehicle_condition;
            vehicle.available_date= req.body.available_date;
            vehicle.rate = req.body.rate;
            vehicle.location_preference = req.body.location_preferrence;
            vehicle.vehicle_booked= req.body.vehicle_booked;

            vehicle.save().then(vehicle =>{
                res.json('Todo updated!');
            
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
       
       
    }
  });
});