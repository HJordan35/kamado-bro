import styled, { StyledComponentBase } from 'styled-components/macro';

import Header from './Header';

interface CardInterface extends StyledComponentBase<any, {}> {
    Header?: any;
}


const Card: CardInterface = styled.div`
  background: #ffffff;
  border-radius: 2px;
  margin: 5px 5px 10px;
  padding: 5px;
  position: relative;
  box-shadow: 2px 2px 4px 0px #cfd8dc;
`;

Card.Header = Header;

export default Card;