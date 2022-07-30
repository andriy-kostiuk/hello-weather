import styled, { keyframes } from 'styled-components';
import { P } from '../../styled';

const rotate = keyframes`
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
  }
`;

export const Preloader = styled.div`
  position: absolute;
  margin-left: -55px;
  margin-top: -100px;
  height: 110px;
  width: 110px;
  left: 50%;
  top: 50%;
  opacity: 1;

  svg {
    width: 110px;
    height: 110px;
  }

  path {

    fill: #241E20;
  }

  #cloud {
    position: relative;
    z-index: 2;

    path {
      fill: #4793FF;
      stroke: #ffffff;
      stroke-width: 0.25;
    }
  }

  #sun {
    margin-left: -10px;
    margin-top: 6px;
    opacity: 0;
    width: 60px;
    height: 60px;
    position: absolute;
    left: 45px;
    top: 15px;
    z-index: 1;

    animation-name: ${rotate};
    animation-duration: 16000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    path {
      stroke-width: 0.18;
      fill: #FFB300;
      stroke: #FFB300;
    }
  }
`;

export const Rain = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  margin-top: -32px;
  margin-left: 19px;
`;

const drop = keyframes`
  50% {
    height: 45px;
    opacity: 0;
  }

  51% {
    opacity: 0;
  }

  100% {
    height: 1px;
    opacity: 0;
  }`;

export const Drop = styled.span`
  opacity: 1;
  display: block;
  float: left;
  width: 3px;
  height: 10px;
  margin-left: 4px;
  border-radius: 0 0 6px 6px;
  background-color: #4793FF;
  animation-name: ${drop};
  animation-duration: 350ms;
  animation-iteration-count: infinite;


  :nth-child(1) {
    animation-delay: -130ms;
  }

  :nth-child(2) {
    animation-delay: -240ms;
  }

  :nth-child(3) {
    animation-delay: -390ms;
  }

  :nth-child(4) {
    animation-delay: -525ms;
  }

  :nth-child(5) {
    animation-delay: -640ms;
  }

  :nth-child(6) {
    animation-delay: -790ms;
  }

  :nth-child(7) {
    animation-delay: -900ms;
  }

  :nth-child(8) {
    animation-delay: -1050ms;
  }

  :nth-child(9) {
    animation-delay: -1130ms;
  }

  :nth-child(10) {
    animation-delay: -1300ms;
  }
`;

export const Text = styled(P)`
  letter-spacing: 1px;
  text-align: center;
  margin-left: -43px;
  font-weight: bold;
  margin-top: 20px;
  font-size: 11px;
  color: ${({theme}) => theme.colors.mainText};
  width: 200px;
`;


