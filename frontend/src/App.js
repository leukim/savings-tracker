import './App.css';
import React, {Component} from "react";
import EmployeeList from "./components/EmployeeList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    }
  }

  async componentDidMount() {
    fetch("http://localhost:8080/api/employees")
        .then(response => response.json())
        .then(response => {
          this.setState({employees: response._embedded.employees});
        });
  }

  render() {
    return (
        <EmployeeList employees={this.state.employees} />
    )
  }
}

export default App;
