import { useParams } from "react-router-dom";
import styled from "styled-components";

const RandomPage = () => {
  const { time } = useParams();
  // console.log(time);
  return (
    <RandomPageWrapper>
      <Time>{time}메뉴</Time>
      <RandomButton>랜덤메뉴돌리기</RandomButton>
      <img
        src="https://vscode.dev/github/annie4616/today_menu/blob/main/src/21631.jpg"
        alt="image"
      />
      <FoodName>메뉴이름</FoodName>
      <NaverButton onClick={() => window.open("https://www.naver.com/")}>
        네이버에서 검색
      </NaverButton>
    </RandomPageWrapper>
  );
};

export default RandomPage;

const Time = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;

const RandomPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-color: #eae3da;
  height: 100vh;
  > img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border: 1px solid black;
    margin-top: 20px;
  }
`;

const RandomButton = styled.button`
  background-color: transparent;
  height: 50px;
  width: 300px;
  border: 1px solid gray;
  margin-top: 40px;
  font-size: 20px;
  font-weight: bold;
`;
const NaverButton = styled.button`
  background-color: transparent;
  height: 50px;
  width: 300px;
  border: 1px solid gray;
  margin-top: 40px;
  font-size: 20px;
  font-weight: bold;
`;

const FoodName = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
`;
