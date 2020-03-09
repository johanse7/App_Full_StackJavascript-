import styled from 'styled-components';
import { device } from '../Global';

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
  
`;

export default TextListWrapper;