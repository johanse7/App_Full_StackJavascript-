import React from 'react';
import HeaderWrapper from '../assest/styles/components/HeaderWrapper'

const Header = ({ children }) => (
    <HeaderWrapper>
        {children}
    </HeaderWrapper>
);

export default Header;