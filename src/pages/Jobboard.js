import React, {useState, useEffect} from 'react'
import { Container, Icon, Menu, Table } from 'semantic-ui-react'
import JobboardService from '../services/jobboardService';

export default function Jobboard() {

    const [jobboards, setJobboards] = useState([]);

    useEffect(()=>{
        let jobboardService = new JobboardService();
        jobboardService.getJobboards().then(result=>setJobboards(result.data.data))
    })

    return (
        <Container>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan="5">
                            <h4>All Jobs</h4>
                        </Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell>Employer</Table.HeaderCell>
                        <Table.HeaderCell>Position</Table.HeaderCell>
                        <Table.HeaderCell>Open Positions</Table.HeaderCell>
                        <Table.HeaderCell>Create Date</Table.HeaderCell>
                        <Table.HeaderCell>Due Date</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
        
                <Table.Body>
                    {
                        jobboards.map(jobboard=>(
                            <Table.Row key={jobboard.id}>
                                <Table.Cell>{jobboard.employerName}</Table.Cell>
                                <Table.Cell>{jobboard.positionName}</Table.Cell>
                                <Table.Cell>{jobboard.openPositions}</Table.Cell>
                                <Table.Cell>{jobboard.createdAt}</Table.Cell>
                                <Table.Cell>{jobboard.dueDate}</Table.Cell>
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
