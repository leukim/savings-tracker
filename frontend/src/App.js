import './App.css';
import React, {Component} from "react";
import EmployeeList from "./components/EmployeeList";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap";
import NaviBar from "./components/NaviBar";

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
        <>
            <NaviBar />
            <Container fluid>
                <Row>
                    <Col>
                        <EmployeeList employees={this.state.employees} />
                    </Col>
                </Row>
            </Container>
        </>

    )
  }
}

export default App;
