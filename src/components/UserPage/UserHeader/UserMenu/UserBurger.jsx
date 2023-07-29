import { CloseOutlined, LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
function UserBurger({ active, setActive }) {
    const history = useNavigate();
    const userlogout = () => {
        localStorage.removeItem("user_login")
        history("/");
    }
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
                        </ul>
                        <div className="menu-content__burger-logout">
                            <div className="menu-content__btn-logout button" onClick={userlogout}>
                                <span className="menu-content__burgerspanlogin login-arrow"><LogoutOutlined /></span>
                                LogOut</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserBurger;