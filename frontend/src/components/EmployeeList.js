import React, {Component} from "react";
import Employee from "./Employee";
import {Table} from "react-bootstrap";

class EmployeeList extends Component {
    render() {
        const employees = this.props.employees.map(employee => <Employee key={employee._links.self.href} employee={employee}/>);

        return (
            <Table bordered>
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Description</th>
                    </tr>
                    {employees}
                </tbody>
            </Table>
        )
    }
}

export default EmployeeList