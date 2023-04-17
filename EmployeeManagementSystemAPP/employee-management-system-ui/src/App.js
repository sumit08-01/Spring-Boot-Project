import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
// import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={ListEmployeeComponent}></Route>
            <Route path="/employees" element={ListEmployeeComponent}></Route>
            {/* step -1 */}
            <Route
              exact
              path="/add-employee/:id"
              Component={CreateEmployeeComponent}
            ></Route>
            <Route
              exact
              path="/view-employee/:id"
              Component={ViewEmployeeComponent}
            ></Route>
            {/* <Route
              exact
              path="/add-employee"
              Component={CreateEmployeeComponent}
            ></Route> */}
            {/* <Route
              exact
              path="/update-employee/:id"
              Component={UpdateEmployeeComponent}
            ></Route> */}
          </Routes>
          <ListEmployeeComponent />
        </div>
      </BrowserRouter>
      <FooterComponent />
    </>
  );
}

export default App;
