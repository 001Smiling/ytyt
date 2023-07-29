import React, { useState } from "react";
import { PlayCircleFilled, CloseCircleFilled, ArrowRightOutlined } from "@ant-design/icons";
import process from "../../../Assets/Video/process.mp4";
import videoimg from "../../../Assets/Image/Main/video.PNG"


function Howstudy({ activeTests }) {
    const [Withoutvideo, setWithoutvideo] = useState(false);
    const openvideo = () => {
        setWithoutvideo(true);
    };
    const closevideo = () => {
        setWithoutvideo(false);
    };
    return (
        <section className="main-howstudy" id="main-howstudy">
            <div className="main-howstudy__title">Как происходит обучение на YtYt?</div>
            <div className="main-howstudy__subtitle">Обучение должно быть комфортным. Поэтому мы разработали собственную платформу для обучения программированию. На ней вы можете не только изучать теорию, но и запускать готовые примеры и даже писать свой собственный код.
            </div>
            <div className="main-howstudy__media">
                {Withoutvideo === false
                    ?
                    <div className="howstudy-mediastyle">
                        <PlayCircleFilled className="howstudy-mediastyle__play" onClick={openvideo} />
                        <div className="howstudy-mediastyle__containerimg">
                            <img className="howstudy-mediastyle__img" src={videoimg} alt="videoimg" />
                            <span className="howstudy-mediastyle__offvideo"></span>
                        </div>
                    </div>
                    :
                    <div className="howstudy-mediastyle">
                        <CloseCircleFilled className="howstudy-mediastyle__close" onClick={closevideo} />
                        <video className="howstudy-mediastyle__video" src={process} controls autoPlay loop playsInline muted></video>
                    </div>}
                <div className="howstudy-mediastyle__back"></div>
                <div className="howstudy-mediastyle__containerdown">
                    <div className="howstudy-mediastyle__down"></div>
                    <div className="howstudy-mediastyle__down2"></div>
                </div>
            </div>
            <div className="howstudy-description sizeblock">
                <div className="howstudy-description__point">
                    <div className="howstudy-description__pointnumber">01</div>
                    <div className="howstudy-description__pointtitle">Весь материал разбит на небольшие уроки</div>
                    <div className="howstudy-description__pointtext">Теория и практика подаются маленькими порциями. Так вам будет легче усваивать новые знания.</div>
                </div>
                <div className="howstudy-description__point">
                    <div className="howstudy-description__pointnumber">02</div>
                    <div className="howstudy-description__pointtitle comp-pointtext">Обучение через практику</div>
                    <div className="howstudy-description__pointtext comp-pointtext">Всё, что вы узнали, вы тут же начинаете применять на практике. Вы сразу видите результаты своего труда.</div>
                    <div className="howstudy-description__pointtitle mob-pointtext">500 самых разных программ</div>
                    <div className="howstudy-description__pointtext mob-pointtext">От простого калькулятора ипотеки до мощного веб-приложения, размещенного на сервере и доступного из любой точки мира</div>
                </div>
                <div className="howstudy-description__point">
                    <div className="howstudy-description__pointnumber">03</div>
                    <div className="howstudy-description__pointtitle comp-pointtext">Нет ограничений по времени</div>
                    <div className="howstudy-description__pointtext comp-pointtext">Можно совмещать учёбу с работой
                        и другими делами. Не нужно выпрашивать академический отпуск, если пришлось сделать перерыв.</div>
                    <div className="howstudy-description__pointtitle mob-pointtext">Учитесь в комфортном темпе</div>
                    <div className="howstudy-description__pointtext mob-pointtext">От 30 минут до нескольких часов
                        в день. Изучать теорию можно даже
                        с мобильного телефона. Например, пока вы едете на работу.</div>
                </div>
            </div>
            <div className="howstudy-containerbutton">
                <div className="howstudy-test">
                    <div className="howstudy-test__buttonblock" onClick={() => { activeTests(true) }}>
                        <div className="howstudy-test__button button">Начать обучение
                            <span className="howstudy-test__textarrow arrow"><ArrowRightOutlined /></span>
                        </div>
                    </div>
                </div>
                <div className="howstudy-containerbutton__text">Попробуйте, первые уроки бесплатны, но нужно пройти тестирование</div>
            </div>
        </section >
    );
}

export default Howstudy;