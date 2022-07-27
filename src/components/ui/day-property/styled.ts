import styled from 'styled-components';
import { Li, P } from '../../styled';

export const Wrapper = styled(Li)`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Icon = styled.div`
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  box-shadow: 1px 4px 10px -1px rgba(71, 147, 255, 0.2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const Title = styled(P)`
  color: ${({theme}) => theme.colors.baseGrey};
  margin-right: 20px;
  min-width: 90px;
`;
