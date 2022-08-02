import styled from 'styled-components';
import { Div } from '../../styled';
import ImgCloud from '../../../assets/cloud.png';


export const ThisDayWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  @media (min-width: ${({theme}) => theme.viewports.laptopWidth}) {
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: 50px;
  }
`;

export const DayInfoWrapper = styled(Div)`
  padding: 42px 32px;
  background-image: url(${ImgCloud});
  background-repeat: no-repeat;
  background-size: 460px 202px;
  background-position: top right;
`;

