"use client";
import { HeaderComp } from "./components/HeaderComp";
import StyledComponentsRegistry from "./lib/registry";
import { Layout, Typography, Button } from "antd";
const { Title } = Typography;
const { Content } = Layout;
import { styled } from "styled-components";

const Items = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

const MyButton = styled(Button)`
  & {
    background: ${(props) => props.fillColor};
    color: white;
    font-family: Be Vietnam Pro;
  }

  &:hover {
    opacity: 0.7;
  }
`;
const Main = styled(Content)`
  && {
    padding: 60px 50px;
    margin: 0 114px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center
    font-family: Be Vietnam Pro;
  }
`;

const H1 = styled(Title)`
  && {
    font-size: 42px;
    font-weight: 700;
    color: rgb(121, 108, 255);
    margin: 0 0 18px 0;
    text-align: center;
  }
`;
const Desc = styled(Title)`
  &&& {
    color: rgb(58, 58, 58);
    font-size: 18px;
    font-weight: 400;
    margin: 0 0 9px 0;
    font-family: Be Vietnam Pro;
    text-align: center;
  }
`;
function Home() {
  return (
    <StyledComponentsRegistry>
      <HeaderComp>
        <Items>
          <img src="/images/github.svg" />
          <MyButton type="button" size="medium" fillColor={"#796cff"}>
            Sign In
          </MyButton>
          <MyButton type="button" size="medium" fillColor={"#796cff"}>
            Sign Up
          </MyButton>
        </Items>
      </HeaderComp>
      <Main>
        <div style={{ width: "800px" }}>
          <H1>Automate mundane tasks efficiently!</H1>
          <Desc level={4}>
            Unpod.ai is a Low-Code LLM platform designed to automate complex and
            mundane tasks for organisations.
          </Desc>
        </div>
      </Main>
    </StyledComponentsRegistry>
  );
}
export default Home;
