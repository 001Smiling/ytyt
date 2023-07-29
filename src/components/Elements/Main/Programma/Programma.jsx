import React from "react";
import Program from "../../../Assets/Image/Main/programma.png"


const Programma = () => {
    return (
        <section className="main-programma" id="main-programma">
            <div className="main-programma__title">
                Какие технологии вы изучите:
            </div>
            <div className="main-programma__options sizeblock">
                <div className="main-programma__options-imgblok">
                    <img src={Program} className="main-programma__img" alt="programma" />
                </div>
                <div className="main-programma__options-program">
                    <div className="main-programma__options-point-types">
                        <span className="main-programma__options-type1 type">Язык программирования Python</span>
                        <span className="main-programma__options-type2 type">Сети</span>
                        <span className="main-programma__options-type3 type">База данных</span>
                        <span className="main-programma__options-type4 type">Фреймворки Flask и Django</span>
                        <span className="main-programma__options-type5 type">Отладка и тестирование</span>
                        <span className="main-programma__options-type6 type">Docker</span>
                        <span className="main-programma__options-type7 type">Git</span>
                    </div>
                    <div className="main-programma__options-point-end">Это необходимый минимум для современного backend-разработчика</div>
                </div>
            </div>
        </section>
    );
}

export default Programma;