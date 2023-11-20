import React, {FC, useContext} from 'react';
import './style.scss'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import {Context} from "../../index";

const BasketCount: FC<any> = ({count, id}) => {
    const {cart} = useContext(Context)

    return (
        <div className='count'>
            <div className='count__box'>
                <input type='number' className='count__input' min='1' max='1' value={count} readOnly={true}/>
            </div>
            <div className='count__controls'>
                <button type='button' className='count__up'>
                    <AiOutlinePlusCircle/>
                </button>
                <button type='button' className='count__down'>
                    <AiOutlineMinusCircle />
                </button>
            </div>
        </div>
    );
};

export default BasketCount;