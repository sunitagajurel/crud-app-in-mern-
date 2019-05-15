import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/vehicleData/delete/'+this.props.vehicle._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr> 
        <td>{this.props.vehicle.vehicle_type}</td>
        <td>{this.props.vehicle.vehicle_condition}</td>
        <td>{this.props.vehicle.available_date}</td>
        <td>{this.props.vehicle.rate}</td>
        <td>{this.props.vehicle.location_preference}</td>
        <td>{this.props.vehicle._id}</td>

          <td>
            <Link to={"/edit/"+this.props.vehicle._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;