import React from 'react'
import { Input, Menu, Segment, Container } from 'semantic-ui-react'

export default function Header() {
    return (
        <div>
            <Container>
                <Menu pointing>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />
                    <Menu.Item
                        name='friends'
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Container>
        </div>
    )
}