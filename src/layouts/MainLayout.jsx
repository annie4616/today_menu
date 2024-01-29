import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <h1>TODAY MENU</h1>
        </Header>
        <Main>
          <Outlet />
        </Main>
      </Wrapper>
    </>
  );
};

export default MainLayout;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Header = styled.div`
  /* display: flex;
  flex-direction: row; */
  height: 70px;
  width: 100%;
  background-color: black;
  > h1 {
    font-size: 40px;
    margin: 0 0 0 0;
    padding-top: 12px;
    text-align: center;
    color: white;
  }
`;

const Main = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  /* background-color: antiquewhite; */
`;
