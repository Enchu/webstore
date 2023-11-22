import React, {createContext, StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CartStore from "./store/CartStore";
import UserStore from "./store/UserStore";
export const Context = createContext<any>(null)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Context.Provider value={{
        cart: new CartStore(),
        user: new UserStore()
    }}>
        <StrictMode>
            <App />
        </StrictMode>
    </Context.Provider>,
);

