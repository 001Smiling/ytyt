import React from "react";
import Network from "./Network/Network";
import Infa from "./Infa/Infa";



function Footer({ activereg }) {
    return (
        <footer className="footer" id="footer">
            <div className="footer__datablok sizeblock">
                <div className="footer__data">
                    <Network />
                    <Infa activereg={activereg} />
                </div>
                <div className="footer__law">
                    &copy;2022 ytyt — Все права защищены
                    <div className="footer__privacy">
                        <p>Пользовательское соглашение</p>
                        <p>Политика конфиденциальности</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;