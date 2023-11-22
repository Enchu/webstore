import React, {FC, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateCart from "../components/modals/CreateCart";
import CreateCategory from "../components/modals/CreateCategory";

const Admin: FC = () => {
    const [cartVisible, setCartVisible] = useState(false)
    const [categoryVisible, setCategoryVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setCartVisible(true)} >Добавить итем</Button>
            <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setCategoryVisible(true)} >Добавить категорию</Button>
            <CreateCart show={cartVisible} onHide={() => setCartVisible(false)} />
            <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)} />
        </Container>
    );
};

export default Admin;