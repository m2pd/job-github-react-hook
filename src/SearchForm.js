import React from 'react'
import { Form, Col } from 'react-bootstrap'

export default function SearchForm({params, onParamChange}) {
    return (
        <Form className="mb-4">
            <Form.Row className="align-items-end">
                <Form.Group as={Col}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={params.description}
                        name="description" 
                        onChange={onParamChange}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={params.location}
                        name="location" 
                        onChange={onParamChange}
                    />
                </Form.Group>
                <Form.Group as={Col} xs="auto" className="ml-2">
                    <Form.Check 
                        onChange={onParamChange}
                        value={params.full_time}
                        name="full_time"
                        type="checkbox"
                        label="Only full time"
                        className="mb-2"
                    />
                </Form.Group>
            </Form.Row>
        </Form>
    )
}
