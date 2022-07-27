import styled from 'styled-components';

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;

  @media (min-width: ${({theme}) => theme.viewports.laptopWidth}) {
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: 50px;
  }
`;
