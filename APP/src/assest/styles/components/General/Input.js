import styled from 'styled-components';
import { device } from '../../Global';

export const Input = styled.input.attrs((props) => ({
    placeholder: props.placeholder || 'Ingrese el texto',
    type: props.type || 'text'
}))`
    background: #fff;
    color: #525865;
    border-radius: 2em;
    border: 1px solid #d1d1d1;
    box-shadow: inset 0px 1px 8px rgba(0, 0, 0, 0.2);
    font-size: 1em;
    line-height: 2.5;
    outline: none;
    transition: .18s ease-out;
    padding:0.5em;
    outline:none;

    &:hover{
        box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);
    }
    &:focus{
        color: #4b515d;
        border: 1px solid #B8B6B6;
        box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01), 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
    &::placeholder {
        text-align:center;
    }

    ${device.mobilePortrait`
         width:100%;
    `}
`;

export const InputAddText = styled(Input)`
    border-radius:30px;
    width:550px;
`;
