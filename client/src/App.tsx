import './styles/main.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Registration from "./pages/Registration";
import Basket from "./components/basket/Basket";
import ItemId from "./components/items/ItemId";
import Admin from "./pages/Admin";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <ScrollToTop/>
              <Navbar/>

              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/auth" element={<Auth/>} />
                  <Route path="/registration" element={<Registration/>} />
                  <Route path="/item">
                      <Route path=":id" element={<ItemId />}/>
                  </Route>
                  <Route path="/basket" element={<Basket/>} />
                  <Route path="/admin" element={<Admin/>} />
              </Routes>
              <Footer/>
              {/*<ExampleForm/>*/}
          </div>
      </BrowserRouter>
  );
}

export default App;
