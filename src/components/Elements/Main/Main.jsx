import React from "react";
import Programma from "./Programma/Programma";
import BlockAdvantages from "./Advantages/Blockadvantages";
import Howstudy from "./Howstudy/Howstudy";
import Helpandstudy from "./Helpandstudy/Helpandstudy";
import PriceAndRules from "./Price/PriceAndRules";


function Main({ activeTest }) {

    return (
        <main className="main">
            <Programma />
            <BlockAdvantages />
            <Howstudy activeTests={activeTest} />
            <div className="main-bgcolor">
                <Helpandstudy />
                <PriceAndRules activeTests={activeTest} />
            </div>
        </main>
    );
}

export default Main;