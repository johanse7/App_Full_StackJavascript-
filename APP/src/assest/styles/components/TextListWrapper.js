import styled, { keyframes } from 'styled-components';
import { device } from '../Global';

const fade  = keyframes`
 from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const TextListWrapper = styled.div`
  padding: 1.25em;
  grid-template-columns: minmax(auto, 768px);
  display: grid;
  justify-content: center;

  .items {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    grid-row-gap: 1.5em;
    display: grid;
    ${device.mobilePortrait`
        grid-template-columns: repeat(1, 1fr);
    `}
  }
  .card {
    text-decoration: none;
    box-shadow: 8px 14px 38px rgba(39,44,49,.08), 1px 3px 8px rgba(39,44,49,.1);
    border-radius: 5px;
    margin: 0 0 20px 0;
    display: block;
    animation-duration: 4s;
    animation-name: ${fade};
    & p{
      font-size: 18px;
      font-weight: 300;
      padding: 5px 10px;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default TextListWrapper;