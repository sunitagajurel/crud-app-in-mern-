import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Vehicle = props => (
    <tr>
        <td>{props.vehicles.vehicle_type}</td>
        <td>{props.vehicles.vehicle_condition}</td>
        <td>{props.vehicles.available_date}</td>
        <td>{props.vehicles.rate}</td>
        <td>{props.vehicles.location_preference}</td>


        <td>
            <Link to={"/edit/"+props.vehicles._id}>Edit</Link>
        </td>
         <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
    </tr>
)

export default class VehicleList extends Component {

    constructor(props) {
        super(props);
        this.state = {vehicles: []};
        }

    componentDidMount() {
        axios.get('http://localhost:4000/vehicleData/')
            .then(response => {
                this.setState({ vehicles: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    vehicleList() {
        return this.state.vehicles.map(function(currentVehicles, i){
            return <TableRow vehicles={currentVehicles} key={i} />;
            
        })
    }

    render() {
        return (
            <div>
                <h3>Vehicles List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Condition</th>
                            <th>available_date</th>
                            <th>Rate</th>
                            <th>preferred Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.vehicleList() }
                    </tbody>
                </table>
            </div>
        )
    }
}