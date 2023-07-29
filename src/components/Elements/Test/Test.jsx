import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import Test from "../Data/Test";
import StartTest from "./Elements/StartTest";
import Questions from "./Elements/Questions";
import ResultTest from "./Elements/ResultTest";


function ITtest({ closeTest, activereg }) {
    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);

    const quizStartHandler = () => {
        setStep(2);
    }

    return (
        <section className="test">
            <div className="test-block">
                <span className="test-block__close">
                    <CloseOutlined onClick={() => closeTest(false)} />
                </span>
                {step === 1 && <StartTest onQuizStart={quizStartHandler} />}
                {step === 2 && <Questions
                    data={Test.data[activeQuestion]}
                    onAnswerUpdate={setAnswers}
                    numberOfQuestions={Test.data.length}
                    activeQuestion={activeQuestion}
                    results={answers}
                    onSetActiveQuestion={setActiveQuestion}
                    onSetStep={setStep}
                />}
                {step === 3 && <ResultTest
                    results={answers}
                    data={Test.data}
                    closeTest={closeTest}
                    activereg={activereg}
                />}
            </div>
        </section>
    )
}
export default ITtest;