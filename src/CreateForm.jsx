import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

export default function CreateForm(props) {
    const [formData, setFormData] = useState(() => {
        const initial = {};
        props.entries.forEach((entry) => {
            initial[entry] = '';
        });
        return initial;
    });

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => {
        setShowModal(false);
        // Reset form
        const reset = {};
        props.entries.forEach((entry) => {
            reset[entry] = '';
        });
        setFormData(reset);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };

        try {
            const response = await fetch(`http://localhost:8080/${props.requestPath}`, requestOptions);

            if (!response.ok) {
                console.error('Failed to create event:', response.status, response.statusText);
                return;
            }

            const data = await response.json();

            if (data.message === "CREATED" || response.status === 201) {
                props.rerenderParentCallback();
            }

            handleClose();
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create New
            </Button>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Entry</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {props.entries.map((entry) => (
                            <Form.Group className="mb-3" key={entry}>
                                <Form.Label>{entry}</Form.Label>
                                <Form.Control
                                    type="text"
                                    name={entry}
                                    value={formData[entry]}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        ))}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}