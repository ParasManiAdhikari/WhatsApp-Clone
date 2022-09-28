import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

export default function Login({idSubmit}) {

    const idRef = useRef();

    function handleSubmit(e){
        e.preventDefault()
        idSubmit(idRef.current.value);
    }

    function createNewRandomId(){
        idSubmit(uuidV4())
    }

    return (
        <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
            <Form className="w-100" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter Your ID
                    </Form.Label>
                    <Form.Control type="text" ref={idRef} required></Form.Control>
                </Form.Group>
                <Button type="submit">Login</Button>
                <Button onClick={createNewRandomId} variant="secondary" style={{margin:'5px'}}>Create A new ID</Button>
            </Form>
        </Container>
    )
}
