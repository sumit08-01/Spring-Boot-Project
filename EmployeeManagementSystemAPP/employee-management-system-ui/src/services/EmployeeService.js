import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees"; // Get all employee Url
const EMPLOYEE_API_BASE_URLE = "http://localhost:8080/api/v1/employee"; // create a employee a url
const EMPLOYEE_API_BASE_URLEU = "http://localhost:8080/api/v1/employee"; // update Employee

class EmployeeService {
  getEmpoyee() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }
  createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URLE, employee);
  }

  getEmployeeById(employeeId) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + employeeId);
  }

  updateEmployee(employee, employeeId) {
    console.log(employee);
    return axios.put(EMPLOYEE_API_BASE_URLEU + "/" + employeeId, employee);
  }

  deleteEmployee(employeeId) {
    return axios.delete(EMPLOYEE_API_BASE_URLEU + "/" + employeeId);
  }
}
export default new EmployeeService();
