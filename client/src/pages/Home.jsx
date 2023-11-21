import React, {useContext} from 'react';
import Items from "../components/items/Items";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import SlideBar from "../components/slidebar/SlideBar";
import '../styles/home.scss'


const Home = observer(() => {
    const {cart} = useContext(Context)

    const products = cart.currentCart.map((item) => {
        return <Items key={item.id} items={item}/>
    })

    return (
        <div className="main-container">
            {/*<nav className="sidebar">*/}
            {/*    <SlideBar />*/}
            {/*</nav>*/}
            <main>
                <div className="category">
                    {cart.categories.map((category) => (
                        <div key={category.id} onClick={() => cart.chooseCategory(category)}>
                            {category.name}
                        </div>
                    ))}
                </div>
                <div className='main-items'>
                    {products}
                </div>
            </main>
        </div>
    );
});

export default Home;