import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderWrapper, HeaderTitle, Navigation, NavLink } from './header.style';

const Header = () => {
    const navigate = useNavigate();

    const [menu, setMenus] = useState([
        { label: '학교 게시판', path: '/school-board' },
        { label: '지부 게시판', path: '/branch-board' },
        { label: '연합 게시판', path: '/union-board' },
    ]);

    const menuClick = (selectedIndex) => {
        const updatedMenus = menu.map((item, index) => ({
            ...item,
            isSelected: index === selectedIndex,
        }));

        switch (selectedIndex) {
            case 0:
                navigate('/school-board');
                break;
            case 1:
                navigate('/branch-board');
                break;
            case 2:
                navigate('/union-board');
                break;
            default:
                break;
        }

        setMenus(updatedMenus);
    };

    const handleTitleClick = () => {
        navigate('/');
    };

    return (
        <HeaderWrapper>
            <HeaderTitle onClick={handleTitleClick}>NetworkingService</HeaderTitle>
            <Navigation>
                {menu.map((item, index) => (
                    <NavLink
                        key={index}
                        href={item.path}
                        className={item.isSelected ? 'selected' : ''}
                        onClick={() => menuClick(index)}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </Navigation>
        </HeaderWrapper>
    );
};

export default Header;
