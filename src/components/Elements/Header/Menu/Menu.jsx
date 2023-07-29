import React, { useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import logo from '../../../Assets/Image/Header/logo.png'
import BurgerMenu from "./BurgerMenu";
import { HashLink } from 'react-router-hash-link';


function Menu({ activereg, activelog }) {
    const [menuActive, setmenuActive] = useState(false)
    return (
        <div className="header-menu sizeblock">
            <div className="header-menu__block">
                <img src={logo} className="header-menu__logo" alt="logo" />
                <div className=" header-menu__without-burger header-menu__withburger">
                    <nav className="header-menu__option">
                        <HashLink to="./#main-programma" className="header-menu__variant">Чему вы научитесь</HashLink>
                        <HashLink to="./#main-howstudy" className="header-menu__variant">Процесс обучения</HashLink>
                        <HashLink to="./#mainprice-table" className="header-menu__variant">Стоимость</HashLink>
                        <HashLink to="./#footer" className="header-menu__variant">Контакты</HashLink>
                        <div className='header-menu__burget-btn burgermenu-state' onClick={() => setmenuActive(!menuActive)}>
                            <span />
                        </div>
                    </nav>
                    <div className="header-menu__group-button">
                        <div className="header-menu__regist" onClick={() => { activereg(true) }}>Регистрация</div>
                        <div className="header-menu__login login-button" onClick={() => { activelog(true) }}>
                            <span className="header-menu__login-arrow login-arrow"><ArrowRightOutlined /></span>
                            Войти
                        </div>
                    </div>
                </div>
            </div>
            <BurgerMenu active={menuActive} setActive={setmenuActive} activereg={activereg} activelog={activelog} />
        </div>
    );
}

export default Menu;