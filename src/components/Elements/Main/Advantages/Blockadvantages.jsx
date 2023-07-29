import React from "react";
import Advantages from "./Advantages"
import { advs } from "../../Data/AdvData";

export default function blockAdvantages() {
    const cardcontext = advs.map((adv, id) => (
        <Advantages img={adv.img} subtitle={adv.subtitle} text={adv.text} key={id} />
    ))
    return (
        <section className="main-advantages">
            <div className="main-advantages__title">Обучение в YtYt – это удобно и результативно</div>
            <div className="main-advantages__points sizeblock">
                {cardcontext}
            </div>
        </section>
    )
}

