import React, {useContext} from 'react';
import './style.scss'
import {Context} from "../../index";
import {observer} from "mobx-react-lite";


const Items = observer(({items}) => {
    const {img, title, desc, price, id} = items
    const {cart} = useContext(Context)

    return (
        <div className='item'>
            <img src={img} alt={""}/>
            <h2>{title}</h2>
            <p>{desc}</p>
            <b>{price}$</b>
            <div className='add-to-cart' onClick={() => cart.addToOrder(items)}>+</div>
        </div>
    );
});

export default Items;