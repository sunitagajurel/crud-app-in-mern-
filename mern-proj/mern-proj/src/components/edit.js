import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
        this.onChangeVehicleType = this.onChangeVehicleType.bind(this);
        this.onChangeVehicleCondition = this.onChangeVehicleCondition.bind(this);
        this.onChangeVehicleAvailableDate = this.onChangeVehicleAvailableDate.bind(this);
        this.onChangeVehiclerate = this.onChangeVehiclerate.bind(this); 
        this.onChangeVehiclePreferredLocation= this.onChangeVehiclePreferredLocation.bind(this);      
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            
            vehicle_type :'',
            vehicle_condition : '',
            available_date : '',
            rate :'', 
            location_preference: '',
            vehicle_booked: false
        

  }  
  }

  componentDidMount() {
      axios.get('http://localhost:4000/vehicleData/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                
                  vehicle_type: response.data.vehicle_type,
                  vehicle_condition : response.data.vehicle_condition,
                  available_date :response.data.available_date,
                  rate :response.data.rate, 
                  location_preference: response.data.location_preference
                 });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

   onChangeVehicleType(e) {
        this.setState({
            vehicle_type: e.target.value
        });
    }

    onChangeVehicleCondition(e) {
        this.setState({
            vehicle_condition: e.target.value
        });
    }
    onChangeVehicleAvailableDate(e) {
        this.setState({
            available_date: e.target.value
        });
    }

    onChangeVehiclerate(e) {
        this.setState({
            rate: e.target.value
        });
    }

    onChangeVehiclePreferredLocation(e) {
        this.setState({
            location_preference: e.target.value
        });
    }


  onSubmit(e) {
    e.preventDefault();
    
      const newVehicle = {
            vehicle_type: this.state.vehicle_type,
            vehicle_condition: this.state.vehicle_condition,
            available_date: this.state.available_date,
            rate : this.state.rate,
            location_preference  : this.state.location_preference
        };
    
    axios.post('http://localhost:4000/vehicleData/update/'+this.props.match.params.id, newVehicle)
        .then(res => console.log(res.data));
    
    this.props.history.push('/list');
  }
 
  render() {
    return (
        <div style={{marginTop: 10}}>
                <h3>Add Vehicles</h3>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="Type" 
                                    id=" Car"
                                    value="Car" 
                                    checked={this.state.vehicle_type==='Car'} 
                                    onChange={this.onChangeVehicleType}
                                    />
                            <label className="form-check-label">Car</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="Type" 
                                    id="Bike" 
                                    value="Bike" 
                                    checked={this.state.vehicle_type==='Bike'} 
                                    onChange={this.onChangeVehicleType}
                                    />
                            <label className="form-check-label">Bike</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="Type" 
                                    id="Scooter" 
                                    value="Scooter" 
                                    checked={this.state.vehicle_type==='Scooter'} 
                                    onChange={this.onChangeVehicleType}
                                    />
                            <label className="form-check-label">Scooter</label>
                        </div>
                    </div>
                    <div className="form-group"> 
                        <label>Condition:</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.vehicle_condition}
                                onChange={this.onChangeVehicleCondition}
                                />
                    </div>
                    <div className="form-group">
                        <label>availabledate </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.available_date}
                                onChange={this.onChangeVehicleAvailableDate}
                                />
                    </div>

                    <div className="form-group">
                        <label>Charge</label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.rate}
                                onChange={this.onChangeVehiclerate}
                                />
                    </div>
                    <div className="form-group">
                        <label>preferred location :</label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.location_preference}
                                onChange={this.onChangeVehiclePreferredLocation}
                                />
                    </div>
                    
         <div className="form-group">
                        <input type="submit" value="Update
                         Vehicle " className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
