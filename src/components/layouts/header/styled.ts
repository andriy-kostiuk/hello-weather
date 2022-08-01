import styled from 'styled-components';

export const StyledHeader = styled.header`
  max-width: ${({theme}) => theme.viewports.desktopWidth};
  margin: 20px auto;
  padding: 0 ${({theme}) => theme.pageIndents.mobilePadding};
  min-height: ${({theme}) => theme.headerHeight};
  display: flex;
  flex-direction: column;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 ${({theme}) => theme.pageIndents.tabletPadding};
  }

  @media (min-width: ${({theme}) => theme.viewports.laptopWidth}) {
    padding: 0 ${({theme}) => theme.pageIndents.laptopPadding};
  }

  @media (min-width: ${({theme}) => theme.viewports.desktopWidth}) {
    padding: 0 ${({theme}) => theme.pageIndents.desktopPadding};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    background-color: rgba(0, 0, 0, .01);
  }

  &:active {
    box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
    background-color: rgba(0, 0, 0, .05);
  }
`;
