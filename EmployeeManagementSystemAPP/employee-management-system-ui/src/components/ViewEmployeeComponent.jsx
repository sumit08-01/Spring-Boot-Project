import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

export default class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   id: this.props.match.params.id,
      id: 5,
      employee: {
        // firstName: "sumit",
        // lastName: "gond",
        // emailId: "sumitgond9999",
      },
    };
  }
  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      this.setState({ employee: res.data });
    });
  }
  render() {
    return (
      <>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">View Emoloyee Details</h3>
          <div className="card-body">
            <div className="row">
              <label>Employee First Name : </label>
              <div>{this.state.employee.firstName}</div>
            </div>
            <div className="row">
              <label>Employee Last Name : </label>
              <div>{this.state.employee.lastName}</div>
            </div>
            <div className="row">
              <label>Employee Email Address : </label>
              <div>{this.state.employee.emailId}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
