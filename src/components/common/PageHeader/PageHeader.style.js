// prettier-ignore
import styled from 'styled-components';
import { palette } from 'styled-theme';

const PageHeaderStyle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: ${palette('secondary', 5)};
  width: 100%;
  margin-right: 17px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  white-space: nowrap;

  @media only screen and (max-width: 767px) {
    margin: 0 10px;
    margin-bottom: 30px;
  }

  &:before {
    content: '';
    width: 7px;
    height: 30px;
    background-color: ${palette('secondary', 3)};
    display: flex;
    margin: 0 15px 0 0;
  }

  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${palette('secondary', 3)};
    display: flex;
    margin: 0 0 0 15px;
  }
`;

export default PageHeaderStyle;

