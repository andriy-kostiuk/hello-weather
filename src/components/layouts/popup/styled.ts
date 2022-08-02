import styled from 'styled-components';
import { P } from '../../styled';

export const StyledPopup = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.secondaryBg};
  padding: 20px 10px;
  max-width: 750px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 80%;
  z-index: 1;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    min-width: 708px;
    padding: 42px;
    flex-direction: row;
  }

  @media (min-width: ${({theme}) => theme.viewports.laptopWidth}) {
    min-width: 750px;
    flex-direction: row;
  }
`;

export const Blur = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .3);
`;

export const LeftColumn = styled.div`
  margin: 0 auto 20px;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    margin: 0 20px 0 0;
    min-width: 170px;
  }
`;

export const Temperature = styled(P)`
  color: ${({theme}) => theme.colors.baseBlue};
  font-size: 60px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const Day = styled(P)`
  font-size: 25px;
  margin-bottom: 12px;
`;

export const Img = styled.div`
  margin-bottom: 12px;

  svg {
    display: block;
    width: 48px;
    height: 48px;
  }
`;

export const Text = styled(P)`
  color: ${({theme}) => theme.colors.baseGrey};
  font-size: 15px;
`;

export const Close = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 20px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  svg {
    width: 26px;
    height: 26px;
  }

  &:hover {
    opacity: .7;
  }

  &:active {
    opacity: 1;
  }
`;
