import { ArrowRightOutlined } from "@ant-design/icons";

function StartTest({ onQuizStart }) {
    return (
        <div className="block-start">
            <div className="block-start__sizeblock blok__sizeblock">
                <div className="block-start__content blok__content">
                    <h2 className="block-start__title">Перед тем, как приступить к обучению, необходимо пройти небольшой тест</h2>
                    <p className="block-start__description">Тест состоит из 4 заданий на логическое мышление и прочие навыки, необходимые программисту. Задания не самые простые. Но ни в коем случае не выбирайте ответы наугад. Если вы не можете дать правильный ответ – выбирайте пункт «Не знаю».</p>
                    <div className="block-start__button button" onClick={onQuizStart}>
                        <span className="block-start__btn-text">Начать тест</span>
                        <span className="block-start__arrow arrow"><ArrowRightOutlined /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StartTest;

