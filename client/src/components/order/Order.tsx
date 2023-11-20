import React, {FC, useContext} from 'react';
import {FaTrash} from "react-icons/fa";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import './style.scss'

const Order:FC<any> = observer(({item}) => {
    const {cart} = useContext(Context)

    return (
        <div className='item'>
            <img src={item.img}  alt={''}/>
            <h2>{item.title}</h2>
            <p>{item.price}$</p>
            <FaTrash className='delete-icon' onClick={() => cart.deleteOrder(item.id)}/>
        </div>
    );
});

export default Order;