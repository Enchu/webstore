import React, {FC, useContext} from 'react';
import {Context} from "../../index";
import './style.scss'

const SlideBar: FC = () => {
    const {cart} = useContext(Context)

    return (
        <div className='sidebar-container'>
            <h3>Categories</h3>
            <ul>
                {cart.categories.map((category: any) => (
                    <li key={category}>{category.cat}</li>
                ))}
            </ul>
        </div>
    );
};

export default SlideBar;