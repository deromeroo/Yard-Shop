import React, { useState } from 'react';
import '@styles/MobileMenu.scss';
import close from '@icons/icon_close.png';

export const MenuMobile = ({toggleMobile, setToggleMobile}) => {

    if( toggleMobile ) {

        return (
            <aside className='MenuMobile'>

                <div className='menu-mobile--header'>
                    <h3 className='menu-mobile--title'>Categories</h3>
                    <img src={close} alt="close-icon" onClick={ () => setToggleMobile(!toggleMobile)} />
                </div>

                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </aside>
        )
    }

}
