// prettier-ignore
import styled from 'styled-components';
import { palette } from 'styled-theme';

const BoxStyle = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  background-color: #fff;
  border: 1px solid ${palette('border', 0)};
  border-radius: 5px;
  margin: 0 0 16px;
  
  &.bordered {
    border: 1px solid ${palette('border', 0)};
    border-radius: 4px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 767px) {
    padding: 20px;
  }

  &.half {
    width: calc(50% - 34px);
    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;



export default BoxStyle;
