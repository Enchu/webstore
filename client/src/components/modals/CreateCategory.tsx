import React, {FC} from 'react';
import {Form, Modal} from "react-bootstrap";

const CreateCategory:FC<any> = () => {
    return (
        <Modal size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить Категорию
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder={"Введите"}/>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default CreateCategory;