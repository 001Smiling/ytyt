import React from 'react';
import About from '../../Elements/Header/About/About';
import UserMenu from './UserMenu/UserMenu';
function UserHeader() {
    return (
        <section className='header'>
            <UserMenu />
            <About />
        </section>
    );
}

export default UserHeader;