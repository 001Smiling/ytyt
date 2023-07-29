import React, { useState } from 'react';
import { CloseOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom'


function LogIn({ closeTest }) {
    const [error, setError] = useState('');
    const [error2, setError2] = useState('');
    const history = useNavigate();
    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })
    console.log(inpval);

    const getdata = (e) => {
        const { value, name } = e.target;
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const login = (e) => {
        e.preventDefault();

        const getuserdata = localStorage.getItem("user");
        console.log(getuserdata);

        const { email, password } = inpval;
        if (email === "") {
            setError('Введите ваш email!');
        } else if (!email.includes("@")) {
            setError('Email некорректный!');
        } else if (password === "") {
            setError2('Придумайте и введите пароль');
        } else if (password.length < 5) {
            setError('В пароле должно быть не менее 5 символов');
        } else {

            if (getuserdata && getuserdata.length) {
                const userdata = JSON.parse(getuserdata);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("Пользователь не найден")
                } else {
                    console.log("Пользователь залогинился");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))
                    closeTest(false)
                    history("/user")
                }
            }
        }

    }

    return (
        <section className="login">
            <div className="login-block">
                <span className="login-block__close close__button">
                    <CloseOutlined onClick={() => closeTest(false)} />
                </span>
                <form className="login-form">
                    <p className="login-form__point">
                        <span className="login-form__span">Email:</span>
                        <input className="login-form__input" onChange={getdata} placeholder="Введите email" type="email" id="email" name="email" />
                    </p>
                    {error && <h3 className="block-questions__error">{error}</h3>}
                    <p className="login-form__point">
                        <span className="login-form__span">Пароль:</span>
                        <input className="login-form__input" onChange={getdata} placeholder="Введите пароль" type="password" id="password" name="password" />
                    </p>
                    {error2 && <h3 className="block-questions__error">{error2}</h3>}
                    <div className="login-form__button" onClick={login} >
                        <span className="header-menu__login-arrow login-arrow"><ArrowRightOutlined /></span>
                        Войти
                    </div>
                </form>
            </div>
        </section>
    )
}
export default LogIn;