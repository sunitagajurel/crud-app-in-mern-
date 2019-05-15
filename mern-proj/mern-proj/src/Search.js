import React, { Component } from 'react';

class search extends Component {
    state = {
        query: '',
        data: [],
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
        this.filterArray();
    }

    getData = () => {
        fetch(`http://localhost:4000/vehicleData`)
        .then(response => response.json())
        .then(responseData => {
            // console.log(responseData)
            this.setState({
                data:responseData
            })
        })
    }

    filterArray = () => {
        var searchString = this.state.query;
        var responseData = this.state.data
        if(searchString.length > 0){
            // console.log(responseData[i].name);
            responseData = responseData.filter(l => {
                console.log( l.name.toLowerCase().match(searchString));
            })
        }
    }

    componentWillMount() {
        this.getData();
    }
    render() {
        return (
            <div className="searchForm">
                <form>
                    <input type="text" id="filter" placeholder="Search for..." ref={input => this.search = input} onChange={this.handleInputChange}/>
                </form>
                <div>
                    {
                        this.state.data.map((i) =>
                            <p>{i.vehicle_location}</p>
                        )
                    }
                </div>
            </div>
        )
    }
}


export default search;