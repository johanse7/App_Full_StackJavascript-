import styled from 'styled-components';
import { device } from '../../Global';

const Botton = styled.button`
    padding:1.5em 1em;
    background: ${(props)=> props.color || 'rgba(0,212,255,0.5)'};
    color: #fff;
    border-radius: 5px;
    box-shadow: 0  17px 10px -10px rgba(0, 0, 0, 0.4);
    border:0;
    width:150px;
    text-transform: uppercase;
    margin: 1.25em;
    cursor: pointer;
    transition: all ease-in-out 300ms;
    &:hover{
      box-shadow: 0  37px 20px -20px rgba(0, 0, 0, 0.2);
      transform: translate(0, -10px);
    }

    
    ${device.mobilePortrait`
         width:100%;
    `}
`;

export default Botton;