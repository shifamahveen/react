import React, { Component } from 'react'

class Form extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: {},     // object to track errors
            submitted: false,   //flag to check if form is succesfully submitted or not
        }
    }

    handleForm = (event) => {
        event.preventDefault();     // to prevent form submission to server script

        let errors = {};        // create new object to add errors if any
        if(this.state.username === '') {
            errors.username = "Username is required";
        }
        if(this.state.email === '') {
            errors.email = "Email is required";
        }
        if(this.state.password === '' || this.state.password.length < 8){
            errors.password = 'Password is required and it should be atleast 8 chars';
        }

        this.setState({ errors: errors });   // posting errors object to state object

        // checking if errors obj is empty to submit succesfully
        if(Object.keys(errors).length === 0) {
            console.log("Form submitted successfully");
            this.setState({ submitted: true });
        }
    }
    render() {
      return (
        <form className='container my-5' onSubmit={this.handleForm}>
            <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                type="text"
                value={this.state.username}
                onChange={(e) => (this.setState({username: e.target.value}))}
                className="form-control"
                />
                {this.state.errors.username && <p className='text-danger '>{this.state.errors.username}</p>} 
            </div>
            <div className="mb-3">
                <label className="form-label">
                Email address
                </label>
                <input
                type="email"
                value={this.state.email}
                onChange={(e) => (this.setState({email: e.target.value}))}
                className="form-control"
                />
                {this.state.errors.email && <p className='text-danger '>{this.state.errors.email}</p>}
            </div>
            <div className="mb-3">
                <label className="form-label">
                Password
                </label>
                <input
                type="password"
                value={this.state.password}
                onChange={(e) => (this.setState({password: e.target.value}))}
                className="form-control"
                />
                {this.state.errors.password && <p className='text-danger '>{this.state.errors.password}</p>}
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            {
                this.state.submitted && <h5 className='text-success'>Form submitted Succesfully</h5>
            }
        </form>

      )
    }
}

export default Form;