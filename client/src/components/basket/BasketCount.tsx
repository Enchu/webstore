import React, {FC, useContext} from 'react';
import './style.scss'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import {Context} from "../../index";

const BasketCount: FC<any> = ({count, id}) => {
    const {cart} = useContext(Context)

    return (
        <div className='count'>
            <button type='button'>
                <AiOutlineMinusCircle className='count__down'/>
            </button>

            <div className='count__box'>
                <input type='number' className='count__input' min='1' max='1' value={count} readOnly={true}/>
            </div>

            <button type='button'>
                <AiOutlinePlusCircle className='count__up'/>
            </button>
        </div>
    );
};

export default BasketCount;