import styled from 'styled-components';
import { Li, P } from '../../styled';

export const Card = styled.div`
  padding: 11px;
  border-radius: 10px;
  width: 148px;
  background-color: ${({theme}) => theme.colors.cardBg};
  cursor: pointer;
`;

type TextCategory = 'main' | 'additional'

interface TextProps {
  $marginBottom?: number;
  category?: TextCategory;
}

export const Text = styled(P)<TextProps>`
  color: ${(props) => props.category === 'main' ? props.theme.colors.mainText : props.theme.colors.baseGrey};
  margin-bottom: ${(props) => props.$marginBottom ? `${props.$marginBottom}px` : 0};
  font-weight: ${(props) => props.category === 'main' ? 500 : 400};
  font-size: ${(props) => props.category === 'main' ? '18px' : '14px'};

  span {
    color: ${({theme}) => theme.colors.mainText};
    font-weight: 500;
  }
`;

export const Img = styled.div`
  margin-bottom: 13px;

  svg {
    width: 48px;
    height: 48px;
  }
`;
