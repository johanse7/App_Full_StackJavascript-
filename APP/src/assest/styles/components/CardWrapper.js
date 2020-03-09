import styled, { keyframes } from 'styled-components';

const fade  = keyframes`
 from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CardWrapper = styled.article`
      box-shadow: 8px 14px 38px rgba(39,44,49,.08), 1px 3px 8px rgba(39,44,49,.1);
      border-radius: 5px;
      margin: 0 0 20px 0;
      display: block;
      animation-duration: 4s;
      animation-fill-mode: forwards;
      animation-name: ${fade};
      & p{
        font-size: 18px;
        font-weight: 300;
        padding: 5px 10px;
        display: flex;
        justify-content: space-between;
        word-break: break-all;  
      }
`;
export default CardWrapper;