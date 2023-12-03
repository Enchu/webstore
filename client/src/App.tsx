import './styles/main.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";
import React, {useContext, useEffect, useState} from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Basket from "./components/basket/Basket";
import ItemId from "./components/items/ItemId";
import Admin from "./pages/Admin";
import {Context} from "./index";
import Checkout from "./components/checkout/Checkout";

function App() {
    const {user} = useContext(Context)

    useEffect(() => {
        // check().then(data => {
        //     user.setUser(true)
        //     user.setIsAuth(true)
        // })
        user.setUser(false)
        user.setIsAuth(false)
    }, []);

    return (
        <BrowserRouter>
            <div className="App">
                <ScrollToTop/>
                <Navbar/>

                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/item">
                        <Route path=":id" element={<ItemId />}/>
                    </Route>
                    <Route path="/basket" element={<Basket/>} />
                    <Route path="/admin" element={<Admin/>} />
                    <Route path="/checkouts" element={<Checkout/>}/>
                </Routes>

                <Footer/>
                {/*<ExampleForm/>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
