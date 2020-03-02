import React from 'react';
import HeaderWrapper from '../assest/styles/components/HeaderWrapper'

const Header = ({ children }) => {
    return (
        <HeaderWrapper>
            {children}
        </HeaderWrapper>
    );
};

export default Header;