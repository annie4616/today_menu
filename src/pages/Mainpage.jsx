import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Mainpage = () => {
  const navigate = useNavigate();
  const getRandomPage = (time) => {
    navigate(`/random/${time}`);
  };
  return (
    <MainPageWrapper>
      <Breakfast onClick={() => getRandomPage("아침")}>아침</Breakfast>
      <Lunch onClick={() => getRandomPage("점심")}>점심</Lunch>
      <Dinner onClick={() => getRandomPage("저녁")}>저녁</Dinner>
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
`;
const Breakfast = styled.div`
  width: calc(100% / 3);
  background-color: #feb6b6;
  padding-top: 40px;
  &:hover {
    background-color: #ff6c6c;
  }
`;

const Lunch = styled.div`
  width: calc(100% / 3);
  background-color: #fcfcb8;
  padding-top: 40px;
  &:hover {
    background-color: #f0f00d;
  }
`;

const Dinner = styled.div`
  width: calc(100% / 3);
  background-color: #b3eeb3;
  padding-top: 40px;
  &:hover {
    background-color: #28ed28;
  }
`;

export default Mainpage;
