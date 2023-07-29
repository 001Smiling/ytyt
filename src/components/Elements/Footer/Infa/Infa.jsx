import React from "react";
import { HashLink } from 'react-router-hash-link';



function Infa({ activereg }) {
    return (
        <div className="footer-seconpart">
            <div className="footer-seconpart__menu">
                <HashLink to="./#main-programma" className="footer-seconpart__menu-point">Чему вы научитесь</HashLink>
                <HashLink to="./#main-howstudy" className="footer-seconpart__menu-point">Процесс обучения</HashLink>
                <HashLink to="./#mainprice-table" className="footer-seconpart__menu-point">Стоимость</HashLink>
                <HashLink to="./#footer" className="footer-seconpart__menu-point">Контакты</HashLink>
                <div className="footer-seconpart__menu-point" onClick={() => { activereg(true) }}>Регистрация</div>
            </div>
            <div className="footer-seconpart__contactip">
                <div className="footer-seconpart__contact">
                    <span className="footer-seconpart__contact-point">+7 (499) 348 93 96</span>
                    info@ytyt.ru
                </div>
                <div className="footer-seconpart__ie">
                    ИП Умаров Т. А.<br />
                    ИНН 745216229809
                    ОГРНИП 315745200001358</div>
            </div>
        </div>
    );
}

export default Infa;