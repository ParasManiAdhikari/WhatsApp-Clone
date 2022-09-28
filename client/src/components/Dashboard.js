import React from 'react'
import { Button, Row } from 'react-bootstrap'

export default function Dashboard({ myId, setId }) {
    function clearID() {
        setId(null)
    }

    return (
        <Row>
            __your id is: {myId}
            <Button onClick={clearID}>Logout</Button>
        </Row>
    )
}
