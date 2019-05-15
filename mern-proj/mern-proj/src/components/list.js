import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './listonly';

export default class VehicleList extends Component {

    constructor(props) {
        super(props);
        this.state = {vehicles: []};
        }

    componentDidMount() {
        axios.get('http://localhost:4000/vehicleData')
            .then(response => {
                this.setState({ vehicles: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    vehicleList() {
        return this.state.vehicles.map(function(currentVehicles, i){
            return <TableRow vehicle={currentVehicles} key={i} />;
            
        })
    }

    render() {
        return (
            <div>
                <h3 align ='center'>Vehicles List</h3>
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
        );
    }
}

  