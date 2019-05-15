import React, { Component } from 'react';
import axios from 'axios';

export default class LogUser  extends Component {
	constructor(props) {
        super(props);


        
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);   	
        this.onSubmit = this.onSubmit.bind(this);

 this.state = {
            
            user_name : '',
            password : '',
            email : '',
            loggedIn: false 
    }
}

   

    onChangeUserName(e) {
        this.setState({
            user_name: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
           email: e.target.value
        });
    }


onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Vehicle Description: ${this.state.user_name}`);

         const newUser = {
            user_name: this.state.user_name,
            password: this.state.password,
            email: this.state.email,
            
        };
        this.props.history.push('/list');
        
        // axios.post('http://localhost:4000/vehicleData/user/add', newUser)
        //     .then(res => console.log(res.data));
        //     this.props.history.push('/list');
        this.setState( {
           
            user_name :'',
            password1 : '',
            email : '',
            loggedIn : true
           
        
     })
    }

    




    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>
                	
                    <div className="form-group">
                        <label>UserName</label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.user_name}
                                onChange={this.onChangeUserName}
                                />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input 
                                type="password" 
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                />
                    </div>
                    <div className="form-group">
                        <label>email</label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                />
                    </div>
                    
				 <div className="form-group">
                        <input type="submit" value="SignUp" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
