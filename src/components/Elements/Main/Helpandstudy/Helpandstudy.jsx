import React from "react";
import Help from "../../../Assets/Image/Main/help.png"
import Method from "../../../Assets/Image/Main/method.png"


const Helpandstudy = () => {
    return (
        <section className="main-helpandstudy">
            <div className="helpandstudy-point sizeblock">
                <div className="helpandstudy-point__imgblok">
                    <img className="helpandstudy-point__img" src={Help} alt="help" />
                </div>
                <div className="helpandstudy-point__textblok">
                    <div className="helpandstudy-point__title">Помощь и поддержка</div>
                    <div className="helpandstudy-point__text">Если в процессе обучения возникнут сложности, вы всегда сможете задать вопрос своему наставнику.
                        <span className="helpandstudy-point__textspan">Раз в несколько уроков вы будете получать большое задание, которое нужно будет сдавать на проверку код-ревьюеру. Он внимательно изучит ваш код, найдет ошибки и поможет вам стать лучше.</span>
                    </div>
                </div>
            </div>
            <div className="helpandstudy-point sizeblock">
                <div className="helpandstudy-point__textblok">
                    <div className="helpandstudy-point__title">Методика обучения</div>
                    <div className="helpandstudy-point__text">Весь учебный материал структурирован по принципу «спирального обучения». Сначала вы получаете базовые знания, а затем на каждом витке спирали углубляетесь в изученные темы, доводя их понимание до совершенства. Такой подход упрощает обучение и гарантирует, что вы не пропустите ничего важного.</div>
                </div>
                <div className="helpandstudy-point__imgblok">
                    <img className="helpandstudy-point__img" src={Method} alt="method" />
                </div>
            </div>
        </section>
    );
}

export default Helpandstudy;