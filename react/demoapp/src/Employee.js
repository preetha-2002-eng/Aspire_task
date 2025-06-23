import React, { Component } from 'react';

export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empName: '',
      empLocation: '',
      submittedData: { name: '', location: '' },
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ empName: event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ empLocation: event.target.value });
  }

  handleSubmit() {
    this.setState({
      submittedData: {
        name: this.state.empName,
        location: this.state.empLocation,
      },
    });
  }

  render() {
    return (
      <div>
        <div>
          <label>
            Employee Name:
            <input type="text" value={this.state.empName} onChange={this.handleNameChange} />
          </label>
        </div>
        <div>
          <label>
            Employee Location:
            <input type="text" value={this.state.empLocation} onChange={this.handleLocationChange} />
          </label>
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
        <div>
          {this.state.submittedData.name && (
            <div>
              <h3>Employee Details</h3>
              <p>Name: {this.state.submittedData.name}</p>
              <p>Location: {this.state.submittedData.location}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}


