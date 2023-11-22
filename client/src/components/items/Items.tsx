import React, {FC, useContext} from 'react';
import './style.scss'
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const Items: FC<any> = observer(({items}) => {
    const {img, title, desc, price, id} = items
    const {cart} = useContext(Context)
    const history = useNavigate()

    return (
        <div className='item'>
            <div className='item-img'>
                <img src={img} alt={""} onClick={() => history('/item/' + id)}/>
            </div>
            <h2>{title}</h2>
            <p>{desc}</p>
            <b>{price}$</b>
            <div className='add-to-cart' onClick={() => cart.addToOrder(items)}>+</div>
        </div>
    );
});

export default Items;