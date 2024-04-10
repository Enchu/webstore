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
            <div>
                <h2>{item.title}</h2>
                <p>{item.price}$</p>
            </div>
            <div className='order__item' onClick={() => cart.deleteOrder(item.id)}>
                <div className='order__item-container'>
                    <div className='order__item-text'>
                        Удалить
                    </div>
                    <div className='order__item-icon'>
                        <FaTrash className='delete-icon'/>
                    </div>
                </div>
            </div>

        </div>
    );
});

export default Order;
