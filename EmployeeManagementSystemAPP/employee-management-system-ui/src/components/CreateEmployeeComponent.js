import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

export default class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // step-2
      // id: this.props.match.params.id,
      id: -1,
      firstName: "",
      lastName: "",
      emailId: "",
    };
    this.changeFirstNameHandlerd = this.changeFirstNameHandlerd.bind(this);
    this.changelastNameHandlerd = this.changelastNameHandlerd.bind(this);
    this.changeEmailIdHandlerd = this.changeEmailIdHandlerd.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  // step-3 {adding and deleteing in same component}
  componentDidMount() {
    // step-4
    if (this.state.id === -1) {
      return;
    } else {
      EmployeeService.getEmployeeById(this.state.id).then((response) => {
        let employee = response.data;
        this.setState({
          firstName: employee.firstName,
          lastName: employee.lastName,
          emailId: employee.emailId,
        });
      });
    }
  }

  saveEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    console.log(JSON.stringify(employee));

    if (this.state.id === -1) {
      EmployeeService.createEmployee(employee).then((response) => {
        this.props.history.push("/employees");
      });
    } else {
      EmployeeService.updateEmployee(employee, this.state.id).then(
        (response) => {
          this.props.histroy.push("/employees");
        }
      );
    }
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
  getTitle() {
    if (this.state.id === -1) {
      return <h3 className="text-center">Add Employee</h3>;
    } else {
      return <h3 className="text-center">Update Employee</h3>;
    }
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
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
                    onClick={this.saveEmployee}
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
