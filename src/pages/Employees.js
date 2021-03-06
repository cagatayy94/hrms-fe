import React, {useState, useEffect} from 'react'
import { Container, Icon, Menu, Table } from 'semantic-ui-react';
import EmployeeService from '../services/employeeService';

export default function Employees() {

    const [employees, setEmployees] = useState([]);

    useEffect(()=>{
        let employeeService = new EmployeeService();
        employeeService.getEmployees().then(result=>setEmployees(result.data.data))
    })

    return (
        <Container>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan="5">
                            <h4>All Employees</h4>
                        </Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Surname</Table.HeaderCell>
                        <Table.HeaderCell>Birthday</Table.HeaderCell>
                        <Table.HeaderCell>Github</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
        
                <Table.Body>
                    {
                        employees.map(employee=>(
                        <Table.Row key={employee.id}>
                            <Table.Cell>{employee.email}</Table.Cell>
                            <Table.Cell>{employee.name}</Table.Cell>
                            <Table.Cell>{employee.surname}</Table.Cell>
                            <Table.Cell>{employee.birthday}</Table.Cell>
                            <Table.Cell>{employee.github}</Table.Cell>
                        </Table.Row>
                        ))
                    }
                </Table.Body>
        
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='5'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </Container>
    )
}