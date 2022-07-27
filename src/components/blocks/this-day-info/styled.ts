import styled from 'styled-components';
import { Section } from '../../styled';
import ImgCloud from '../../../assets/cloud.png';

export const StyledSection = styled(Section)`
  padding: 42px 32px;
  background-image: url(${ImgCloud});
  background-repeat: no-repeat;
  background-size: 460px 202px;
  background-position: top right;
`;


