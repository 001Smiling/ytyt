import React, { useEffect, useState } from 'react';
import Like from "../../../Assets/Image/Test/Like.png"
import smile from "../../../Assets/Image/Test/smile.png"
import { ArrowRightOutlined } from "@ant-design/icons";

function ResultTest({ results, data, closeTest, activereg }) {
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [phrase, setphrase] = useState('')
    const [like, setlike] = useState('false')
    useEffect(() => {
        let correct = 0;
        results.forEach((result, index) => {
            if (result.a === data[index].answer) {
                correct++;
                if (correct >= 3) {
                    setphrase('Это великолепный результат! У вас есть все шансы стать отличным программистом. Начните обучение прямо сейчас, доступ ко вводным урокам уже открыт')
                    setlike(true)
                }
                else {
                    setphrase('Не расстраивайся! Начни обучение прямо сейчас и у вас есть все шансы стать отличным программистом!Доступ ко вводным урокам уже открыт')
                    setlike(false)
                }
            }

        });
        setCorrectAnswers(correct);
        // eslint-disable-next-line
    }, []);
    function closeTests() {
        closeTest(false);
        activereg(true)
    }
    return (
        <div className="block-result">
            <div className="block-result__sizeblock blok__sizeblock">
                <div className="block-result__content blok__content">
                    <div className="block-result__like">
                        {like === true
                            ?
                            <img src={Like} alt="like" />
                            : <img src={smile} alt="smile" className='block-result__smile' />
                        }
                        <p className="block-result__correct">Набрано {correctAnswers}/ {data.length}</p>
                    </div>
                    {phrase && <div className="block-result__description">{phrase}</div>}
                    <div className="block-result__btn-result button" onClick={closeTests} >
                        Начать <span className="block-result__btn-span">учиться бесплатно</span>
                        <span className="block-result__arrow"><ArrowRightOutlined /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResultTest;