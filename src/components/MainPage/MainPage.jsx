import { useState } from 'react';
import '../Assets/Styles/base.scss'
import Header from '../Elements/Header/header';
import Main from '../Elements/Main/Main';
import Footer from '../Elements/Footer/Footer';
import ITtest from '../Elements/Test/Test';
import LogIn from '../Elements/Header/LogIn/LogIn';
import RegistrationForm from '../Elements/Header/RegistrationForm/RegistrationForm';

function MainPage() {
    const [Tests, setTest] = useState(false);
    const [Registration, setRegistration] = useState(false);
    const [LogIntrue, setLogIntrue] = useState(false)
    return (
        <>
            {Registration && <RegistrationForm closeTest={setRegistration} activelog={setLogIntrue} />}
            {LogIntrue && <LogIn closeTest={setLogIntrue} />}
            {Tests && <ITtest closeTest={setTest} activereg={setRegistration} />}
            <Header activeTest={setTest} activereg={setRegistration} activelog={setLogIntrue} />
            <Main activeTest={setTest} />
            <Footer activereg={setRegistration} />
        </>
    );
}

export default MainPage;