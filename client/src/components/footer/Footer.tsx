import React, {FC} from 'react';
import './style.css'
import {NavLink} from "react-router-dom";
import Image from "../image/ImageProps";

import vk from "../../image/icons/vk.svg"
import github from "../../image/icons/gitHub.svg"

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <NavLink to={"https://vk.com/kyshynasura"} target={"_blank"}>
                                <Image img={vk} alt="Link"/>
                            </NavLink>
                        </li>
                        <li className="social__item">
                            <NavLink to={"https://github.com/Enchu"} target={"_blank"}>
                                <Image img={github} alt="Link"/>
                            </NavLink>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;