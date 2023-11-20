import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import Order from "./Order";
import './style.scss'

const ShowOrders: FC<any> = observer(({props}) => {
    let summa = 0
    props.orders.forEach((el: { price: string; }) => summa += Number.parseFloat(el.price))
    return (
        <div className='container-order'>
            {props.orders.map((el: {
                id: number;
                title: string;
                img: any;
                desc: string;
                category: string;
                count: number
                price: number;
                totalprice: number; }) => (
                <Order key={el.id} item={el}/>
            ))}
            <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
        </div>
    )
});

export default ShowOrders;