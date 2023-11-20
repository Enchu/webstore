import React, {FC, useContext} from 'react';
import './style.scss'
import BasketCount from "./BasketCount";
import {FaTrash} from "react-icons/fa";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const BasketProduct:FC<any> = observer(({item}) => {
    const {cart} = useContext(Context)

    return (
        <section className='product'>
            <div className='product__img'>
                <img src={item.img} alt={item.title} />
            </div>
            <div className='product__title'>{item.title}</div>
            <div className='product__count'>
                <BasketCount count={item.count} id={item.id} />
            </div>
            <div className='product__price'>
                {item.price} $
            </div>
            <div className='product__controls'>
                <FaTrash className='delete-icon' onClick={() => cart.deleteOrder(item.id)}/>
            </div>
        </section>
    );
});

export default BasketProduct;