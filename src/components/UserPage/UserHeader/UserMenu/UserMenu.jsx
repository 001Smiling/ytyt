import React, { useEffect, useState } from 'react';
import logo from '../../../../components/Assets/Image/Header/logo.png'
import UserBurger from './UserBurger';
import { useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
function UserMenu() {
    const [logindata, setLoginData] = useState([]);
    const [menuActive, setmenuActive] = useState(false)
    const history = useNavigate();
    const Userdata = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);

            setLoginData(user);
        }
    }
    useEffect(() => {
        Userdata();
    }, [])
    const userlogout = () => {
        localStorage.removeItem("user_login")
        history("/");
    }
    return (
        <>
            {
                logindata.length === 0 ? "errror" :
                    <div className="header-menu sizeblock">
                        <div className="header-menu__block">
                            <img src={logo} className="header-menu__logo" alt="logo" />
                            <div className=" header-menu__without-burger header-menu__withburger">
                                <nav className="header-menu__option">
                                    <HashLink to="./#main-programma" className="header-menu__variant">Чему вы научитесь</HashLink>
                                    <HashLink to="./#main-howstudy" className="header-menu__variant">Процесс обучения</HashLink>
                                    <HashLink to="./#mainprice-table" className="header-menu__variant">Стоимость</HashLink>
                                    <HashLink to="./#footer" className="header-menu__variant">Контакты</HashLink>
                                    <div className='header-menu__burget-btn burgermenu-state' onClick={() => setmenuActive(!menuActive)}>
                                        <span />
                                    </div>
                                </nav>
                                <div className="header-menu__name-user">
                                    <h1>{logindata[0].name}</h1>
                                    <div className="header-menu__button-block">
                                        <div className="header-menu__button-out" onClick={userlogout}>LogOut</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <UserBurger active={menuActive} setActive={setmenuActive} />
                    </div>
            }
        </>
    );
}

export default UserMenu;