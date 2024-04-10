import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import Order from "./Order";
import './style.scss'
import {IItems} from "../../Interface/Items";
import {NavLink} from "react-router-dom";

const ShowOrders: FC<any> = observer(({props}) => {
    let summa = 0
    props.orders.forEach((el: IItems) => summa += Number.parseFloat(el.price))

    return (
        <div className='order__container'>
            {props.orders.map((el: IItems) => (
                <Order key={el.id} item={el}/>
            ))}
            <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
            <div className='order__container-check'>
                <NavLink to="/checkouts">
                    <button>Check out</button>
                </NavLink>
            </div>
        </div>
    )
});

export default ShowOrders;
