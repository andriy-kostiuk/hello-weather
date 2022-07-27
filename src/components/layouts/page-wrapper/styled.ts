import styled from 'styled-components';

export const Main = styled.main`
  max-width: ${({theme}) => theme.viewports.desktopWidth};
  margin: 0 auto;
  padding: 0 ${({theme}) => theme.pageIndents.mobilePadding};

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    padding: 0 ${({theme}) => theme.pageIndents.tabletPadding};
  }

  @media (min-width: ${({theme}) => theme.viewports.laptopWidth}) {
    padding: 0 ${({theme}) => theme.pageIndents.laptopPadding};
  }

  @media (min-width: ${({theme}) => theme.viewports.desktopWidth}) {
    padding: 0 ${({theme}) => theme.pageIndents.desktopPadding};
  }
`;
