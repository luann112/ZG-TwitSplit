import styled from 'styled-components';

export const MainLayoutWrapperStyled = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  background-color: rgb(239, 239, 239);
`;

export const MainContentWrapperStyled = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  font-family: 'Raleway', sans-serif;
  .container {
    flex: 1;
    padding-right: 10px;
    padding-left: 10px;
    margin-right: auto;
    margin-left: auto;
    width: 80%;
    @media (max-width: 940px) {
      width: 90%;
    }
  }
`;