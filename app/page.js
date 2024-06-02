"use client";
import { HeaderComp } from "./components/HeaderComp";
import TextArea from "./components/TextArea";
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
const MainContainer = styled(Content)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center
    font-family: Be Vietnam Pro;
  }
  @media only screen and (max-width: 600px) {
    && {
      padding: 0 30px;
    }
  }
  @media only screen and (min-width: 600px) {
    && {
      padding: 0 30px;
    }
  }
  @media only screen and (min-width: 768px) {
    && {
      padding:0 30px;
    }
  }
  @media only screen and (min-width: 992px) {
    && {
      padding: 0 30px;
    }
  }
  @media only screen and (min-width: 1200px) {
    && {
      padding: 0 30px;
    }
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
const Main = styled.div`
  @media only screen and (min-width: 992px) {
    && {
      width: 800px;
    }
  }
`;
const Heading = styled.div`
  @media only screen and (max-width: 600px) {
    && {
      padding: 60px 0px;
    }
  }
  @media only screen and (min-width: 600px) {
    && {
      padding: 60px 0px;
    }
  }
  @media only screen and (min-width: 768px) {
    && {
      padding: 60px 0px;
    }
  }
  @media only screen and (min-width: 992px) {
    && {
      padding: 60px 0px;
    }
  }
  @media only screen and (min-width: 1200px) {
    && {
      padding: 60px 0px;
    }
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
      <MainContainer>
        <Main>
          <Heading>
            <H1>Automate mundane tasks efficiently!</H1>
            <Desc level={4}>
              Unpod.ai is a Low-Code LLM platform designed to automate complex
              and mundane tasks for organisations.
            </Desc>
          </Heading>
          <TextArea />
        </Main>
      </MainContainer>
    </StyledComponentsRegistry>
  );
}
export default Home;
