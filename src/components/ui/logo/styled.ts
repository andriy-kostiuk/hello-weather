import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    margin-bottom: 0;
  }
`;

export const Icon = styled.div`
  margin-right: 20px;

  svg {
    width: 65px;
    height: 65px;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: 25px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.baseBlue};
  text-transform: uppercase;
`;
