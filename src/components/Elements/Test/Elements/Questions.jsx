import React, { useState, useEffect, useRef } from 'react';
import { ArrowRightOutlined } from "@ant-design/icons";

function Questions({ data, results, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) {
    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const [description, setdescription] = useState(false);
    const [answer, setanswer] = useState(false);
    const radiosWrapper = useRef();
    useEffect(() => {
        const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
        if (findCheckedInput) {
            findCheckedInput.checked = false;
        }
    }, [data]);

    const changeHandler = (e) => {
        setSelected(e.target.value);
        if (error) {
            setError('');
        }
        else {
            if (e.target.value === data.answer) {
                setanswer(data.correctly)
            }
            else {
                setanswer(data.mistake)
            }
        }
    }

    const nextClickHandler = () => {
        if (selected === '') {
            return setError('Пожалуйста выберите вариант ответа!');
        }
        setdescription(true)
    }
    const nextClick = () => {
        setdescription(false)
        onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
        setSelected('');
        if (activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion + 1);
        } else {
            onSetStep(3);
        }
    }
    return (
        <>
            {description === false
                ?
                <div className="block-questions">
                    <div className="block-questions__sizeblock blok__sizeblock">
                        <div className="block-questions__questions-content blok__content">
                            <span className="block-questions__questions-number questions__number">ЗАДАНИЕ {activeQuestion + 1}</span>
                            <p className="block-questions__questions-text">{data.question}</p>
                            <div className="block-questions__questions-answer">
                                <div className="block-questions__answers" ref={radiosWrapper}>
                                    {data.choices.map((choice, i) => (
                                        <label className="block-questions__variants" key={i}>
                                            <input className="block-questions__answer-input" type="radio" name="answer" value={choice} onChange={changeHandler} />
                                            <p className="block-questions__answer-point">{choice}</p>
                                        </label>
                                    ))}
                                </div>
                                <div className="block-questions__answer-block">
                                    <div className="block-questions__btn-answer button button__test" onClick={nextClickHandler}>
                                        <span className="block-questions__btn-text" >Ответить</span>
                                        <span className="block-questions__arrow"><ArrowRightOutlined /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {error && <h3 className="block-questions__error">{error}</h3>}
                    </div>
                </div>
                :
                <div className="block-answers">
                    <div className="block-answers__sizeblock blok__sizeblock">
                        <div className="block-answers__questions-content blok__content">
                            <span className="block-answers__number questions__number">ЗАДАНИЕ {activeQuestion + 1}</span>
                            {answer && <h2 className="block-answers__answer">{answer}</h2>}
                            <div className="block-answers__description">
                                <p className="block-answers__text">{data.answerdescription}</p>
                                <p className="block-answers__skill">{data.skill}</p>
                            </div>
                            <div className="block-answers__btn">
                                <div className="block-answers__btn-block">
                                    <div className="block-answers__btn-next button button__test" onClick={nextClick}>
                                        далее
                                        <span className="block-answers__arrow"><ArrowRightOutlined /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default Questions;