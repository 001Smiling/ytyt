import React from "react";
import Iconprice from "../../../Assets/Image/Main/iconprice.png"
import Iconprice2 from "../../../Assets/Image/Main/iconprice2.png"
import Iconprice3 from "../../../Assets/Image/Main/iconprice3.png"
import rules from "../../../Assets/Image/Main/rules.png"
import phone from "../../../Assets/Image/Main/phone.png"
import PriceTable from "./PriceTable/PriceTable";
import { ArrowRightOutlined } from "@ant-design/icons";


function Price({ activeTests }) {
    return (
        <section className="main-price">
            <div className="main-price__title">Стоимость обучения</div>
            <div className="main-price__container sizeblock">
                <div className="main-price__points">
                    <div className="main-price__point1 pricepoint">
                        <img src={Iconprice} alt="iconprice" />
                        <div className="main-price__text">
                            Весь курс разбит на несколько блоков. Оплата поэтапная вы платите только за тот блок, который сейчас проходите.
                        </div>
                    </div>
                    <div className="main-price__point2 pricepoint">
                        <img src={Iconprice2} alt="iconprice" />
                        <div className="main-price__text">Любой из блоков вы можете оплатить в рассрочку</div>
                    </div>
                    <div className="main-price__point3 pricepoint">
                        <img src={Iconprice3} alt="iconprice" />
                        <div className="main-price__text">
                            Если передумаете учиться, то возврат можно оформить в любой момент. Возвращаем деньги за 3 рабочих дня.
                        </div>
                    </div>
                </div>
                <div className="price-phone">
                    <img src={phone} alt="phone" />
                    <span className="price-phone__arrow"><ArrowRightOutlined /></span>
                </div>
                <table className="mainprice-table" id="mainprice-table">
                    <PriceTable />
                </table>
                <div className="mainprice-table__iftime">* если занятиям уделяется около 20 часов в неделю</div>
                <div className="mainprice-rules">
                    <div className="mainprice-rules__points">
                        <div className="mainprice-rules__iconblock"><img src={rules} alt="iconrules" className="mainprice-rules__icon" /></div>
                        <div className="mainprice-rules__text">Все блоки проходятся строго по порядку. Пропустить какой-то блок или начать обучение с середины нельзя, даже если вы считаете, что уже знаете какую-то часть материала. Только так мы можем гарантировать, что вы получите все знания, предусмотренные учебной программой.</div>
                        <div className="mainprice-rules__btn button" onClick={() => { activeTests(true) }}>
                            Начать обучение
                            <span className="mainprice-rules__btnarrow arrow"><ArrowRightOutlined /></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Price;