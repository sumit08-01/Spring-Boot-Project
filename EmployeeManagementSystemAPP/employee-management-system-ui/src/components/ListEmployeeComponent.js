import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.ViewEmployee = this.ViewEmployee.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmpoyee().then((response) => {
      this.setState({
        employees: response.data,
      });
    });
  }
  editEmployee(id) {
    console.log("editEmpoyee");
    console.log(id);
    this.props.history.push(`/add-employee/${id}`);
    // this.props.history.push(`/update-employee/${id}`);
  }

  addEmployee() {
    console.log("kuch bhi");
    console.log(this.props);
    this.props.history.push("/add-employee");
  }
  deleteEmployee(id) {
    // console.log("delete Empoyee", id);
    EmployeeService.deleteEmployee(id).then((response) => {
      // this.props.history.push("/add-employee");
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  }
  ViewEmployee(id) {
    console.log(id);
    this.props.history.push(`/view-employee/${id}`);
  }
  render() {
    return (
      <>
        <h2 className="text-center">Employee List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addEmployee}>
            Add Employee
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => this.editEmployee(employee.id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteEmployee(employee.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-info"
                      onClick={() => this.ViewEmployee(employee.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default ListEmployeeComponent;
