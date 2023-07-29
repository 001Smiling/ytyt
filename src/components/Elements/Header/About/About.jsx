import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

function About({ activeTest }) {
    return (
        <div className="header-about sizeblock">
            <div className="header-about__text">
                <div className="header-about__text-slogan"><span className="header-about__text-name">Школа <span className="header-about__text-y">Y</span>t<span className="header-about__text-y2">Y</span>t</span> для тех, кому нужны реальные навыки,
                    а не просто сертификат</div>
                <div className="header-about__text-test">Пройдите тестирование, чтобы получить доступ к бесплатным вводным урокам</div>
                <div className="header-about__light-btn">
                    <div className="header-about__text-button button" onClick={() => { activeTest(true) }}>Пройти тестирование
                        <span className="header-about__text-buttonarrow arrow"><ArrowRightOutlined /></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;