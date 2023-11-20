import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CartStore from "./store/CartStore";
import data from "./utils/data";

export const Context = createContext<any>(null)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Context.Provider value={{
        cart: new CartStore()
    }}>
        <App />
    </Context.Provider>,
);

