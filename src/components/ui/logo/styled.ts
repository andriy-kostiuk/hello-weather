import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
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
