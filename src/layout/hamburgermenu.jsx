import React, { useState, useRef } from "react";
import HamburgerMenuStyles from './hamburgermenu.style';

const { HamburgerWrapper, MenuContainer, ExitIcon } = HamburgerMenuStyles;

const HamburgerMenu = ({ isOpen, toggleSide }) => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const outside = useRef();

    const closeHamburger = () => {
        setHamburgerOpen(false);
        toggleSide();
    };

    return (
        <HamburgerWrapper ref={outside} className={`SideBarWrap ${isOpen ? 'open' : ''}`}>
            <ExitIcon
                src={HamburgerMenuStyles.ExitHamburgerIcon}
                alt='닫는 아이콘'
                onClick={closeHamburger}
            />

            <div className="menu-container-wrapper">
                <MenuContainer>
                    <ul>
                        <li className="Menu">메뉴1</li>
                        <li className="Menu">메뉴2</li>
                        <li className="Menu">메뉴3</li>
                    </ul>
                </MenuContainer>

                <MenuContainer>
                    <ul>
                        <li className="Menu">다른메뉴1</li>
                        <li className="Menu">다른메뉴2</li>
                        <li className="Menu">다른메뉴3</li>
                    </ul>
                </MenuContainer>

                <MenuContainer>
                    <ul>
                        <li className="Menu">더다른메뉴1</li>
                        <li className="Menu">더다른메뉴2</li>
                        <li className="Menu">더다른메뉴3</li>
                    </ul>
                </MenuContainer>
            </div>
        </HamburgerWrapper>
    );
};

export default HamburgerMenu;
