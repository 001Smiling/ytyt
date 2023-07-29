import { CloseOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { HashLink } from 'react-router-hash-link';
function BurgerMenu({ active, setActive, activereg, activelog }) {
    return (
        <div className={active ? 'menu active' : 'menu'}>
            <div className='blur' onClick={() => setActive(false)}>
                <div className='menu-content'>
                    <div className='menu-content__close'>
                        <CloseOutlined onClick={() => setActive(false)} />
                    </div>
                    <div className="menu-content__position">
                        <ul className='menu-content__block'>
                            <li onClick={() => setActive(false)} >
                                <HashLink to="./#main-programma" className='menu-content__point'>Чему вы научитесь</HashLink>
                            </li>
                            <li onClick={() => setActive(false)} >
                                <HashLink to="./#main-howstudy" className='menu-content__point'>Процесс обучения</HashLink>
                            </li>
                            <li onClick={() => setActive(false)} >
                                <HashLink to="./#mainprice-table" className='menu-content__point'>Стоимость</HashLink>
                            </li>
                            <li onClick={() => setActive(false)} >
                                <HashLink to="./#footer" className='menu-content__point'>Контакты</HashLink>
                            </li>
                            <li onClick={() => setActive(false)} >
                                <p className='menu-content__point' onClick={() => { activereg(true) }}>Регистрация</p>
                            </li>
                        </ul>
                        <div className="menu-content__burgerlogin login-button" onClick={() => { activelog(true) }}>
                            <span className="menu-content__burgerspanlogin login-arrow"><ArrowRightOutlined /></span>
                            Войти
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BurgerMenu;