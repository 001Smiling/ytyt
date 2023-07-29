import React from "react";
import logo from '../../../Assets/Image/Header/logo.png'
import insta from '../../../Assets/Image/Footer/insta.png'
import vk from '../../../Assets/Image/Footer/vk.png'
import facebook from '../../../Assets/Image/Footer/facebook.png'
import youtube from '../../../Assets/Image/Footer/youtube.png'



const Network = () => {
    return (
        <div className="footer-firstpart">
            <div className="footer-firstpart__nameblok">
                <img src={logo} className="footer-firstpart__logo" alt="logo" />
                <div className="footer-firstpart__name">Школа программирования</div>
            </div>
            <div className="footer-firstpart__network">
                <div className="footer-firstpart__network-icon">
                    <img src={insta} alt="insta" />
                </div>
                <div className="footer-firstpart__network-icon">
                    <img src={vk} alt="vk" />
                </div>
                <div className="footer-firstpart__network-icon">
                    <img src={facebook} alt="facebook" />
                </div>
                <div className="footer-firstpart__network-icon">
                    <img src={youtube} alt="youtube" />
                </div>
            </div>
        </div>
    );
}

export default Network;