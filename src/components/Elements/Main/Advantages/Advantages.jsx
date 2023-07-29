import React from 'react';

function Advantages(point) {
    return (
        <>
            <div className='main-advantages__point'>
                <div><img src={point.img} alt='img2' className='main-advantages__img' /></div>
                <div className="main-advantages__blocktext">
                    <div className='main-advantages__subtitle'> {point.subtitle}</div>
                    <div className='main-advantages__text'>{point.text}</div>
                </div>
            </div>
        </>
    );
}

export default Advantages