import styled from 'styled-components'
import { device } from '../Global';

const FormWrapper = styled.form`
    margin: 1.25em 0;
    display: flex;
    justify-content:center;
    align-items:center;
    

    ${device.mobilePortrait`
         width:100%;
         flex-direction:column;
         margin: 1.25em 0;
    `}
`;

export default FormWrapper;