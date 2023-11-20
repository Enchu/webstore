import React, {FC, useContext} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";
import './style.scss'
import {FaCartPlus} from "react-icons/fa";

const ItemId: FC<any> = observer(() => {
    const {cart} = useContext(Context)
    const {id} = useParams()

    const selectedItem = cart.carts.find((item: any) => item.id == id);
    console.log(selectedItem)

    return (
        <div className='item-container'>

            <div className="item-l">
                <div className="item-img">
                    <img src={`${selectedItem.img}`} alt={""}/>
                </div>
            </div>

            <div className="item-r">
                <div className="item-title">
                    <h2>{selectedItem.title}</h2>
                </div>
                <div className="item-desc">
                    <p>{selectedItem.desc}</p>
                </div>

                <div className="item-add">
                    <div className="item-price">
                        <b>{selectedItem.price}$</b>
                    </div>
                    <button type='button'>
                        <FaCartPlus className='item-btn__add' onClick={() => cart.addToOrder(selectedItem)}/>
                    </button>
                </div>
            </div>

        </div>
    );
});

export default ItemId;