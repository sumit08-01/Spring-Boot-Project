import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

export default class UpdateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   id: this.props.match.params.id,
      id: 1,
      firstName: "",
      lastName: "",
      emailId: "",
    };
    this.changeFirstNameHandlerd = this.changeFirstNameHandlerd.bind(this);
    this.changelastNameHandlerd = this.changelastNameHandlerd.bind(this);
    this.changeEmailIdHandlerd = this.changeEmailIdHandlerd.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((response) => {
      let employee = response.data;
      this.setState({
        firstName: employee.firstName,
        lastName: employee.lastName,
        emailId: employee.emailId,
      });
    });
  }
  updateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    console.log(JSON.stringify(employee));
    EmployeeService.updateEmployee(employee, this.state.id).then((reponse) => {
      this.props.histroy.push("/employee");
      console.log(reponse, "res");
    });
  };

  cancel() {
    console.log("cancel method");
    this.props.histroy.push("/employee");
  }
  changeFirstNameHandlerd = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changelastNameHandlerd = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeEmailIdHandlerd = (event) => {
    this.setState({ emailId: event.target.value });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3>Update Employee</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name: </label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandlerd}
                    />
                    <label>Last Name: </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changelastNameHandlerd}
                    />
                    <label>Email Address: </label>
                    <input
                      placeholder="Email Id"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailIdHandlerd}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.updateEmployee}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
