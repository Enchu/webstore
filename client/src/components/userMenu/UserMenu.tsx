import React, {FC, useContext} from 'react';
import './style.scss'
import {IoExitOutline} from "react-icons/io5";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {logout} from "../../http/userApi";

const UserMenu: FC<any> = observer(({onClose }) => {
    const {user} = useContext(Context)

    const handleLogout = async (e: any) => {
        e.preventDefault()

        try {
            let users = await logout()
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.error('Error during login:', error);
                });

            user.setUser({})
            user.setIsAuth(false)

            onClose();
        }
        catch (e){
            console.error('Error during login:', e);
        }
    }

    return (
        <div>
            <ul className="user-menu__ul">
                <li>123</li>
                <li onClick={(e) => handleLogout(e)}>
                    <div className="user-menu-close">
                        <span>Выйти</span>
                        <IoExitOutline className="img-close"/>
                    </div>
                </li>
            </ul>
        </div>
    );
});

export default UserMenu;