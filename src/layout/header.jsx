import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

const Header = () => {
    const [menu, setMenus] = useState([
        { label: '홈', path: '/' },
        { label: '게시판', path: '/board' },
        { label: '히스토리', path: '/history' },
        { label: '사진첩', path: '/gallery' },
        { label: 'UMC 네트워킹', path: '/umcnetworking' },
    ]);

    const menuClick = (selectedIndex) => {
        const updatedMenus = menu.map((item, index) => ({
            ...item,
            isSelected: index === selectedIndex,
        }));

        setMenus(updatedMenus);
    };

    return (
        <header className='header-wrapper'>

            <div className='left'>
                <img src={require('../assets/hambuger.svg').default} alt="햄버거 아이콘" />
            </div>

            <div className='center'>
                <img src={require('../assets/logo.svg').default} alt="로고" />

                <div className='navigation'>
                    {menu.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className={item.isSelected ? 'selected' : ''}
                            onClick={() => menuClick(index)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

            </div>

            <div className='right'>
                <img src={require('../assets/notification.svg').default} alt="Notification" />
                <img src={require('../assets/friend.svg').default} alt="Friend" />
            </div>

        </header>
    );
};

export default Header;