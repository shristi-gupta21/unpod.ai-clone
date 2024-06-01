"use client";
import { HeaderComp } from "./components/HeaderComp";
import StyledComponentsRegistry from "./lib/registry";
import { Button } from "antd";
import { styled } from "styled-components";

const Items = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

const MyButton = styled(Button)`
  & {
    background: ${(props) => props.fillColor};
    color: white;
  }

  &:hover {
    opacity: 0.7;
  }
`;

function Home() {
  return (
    <StyledComponentsRegistry>
      <HeaderComp>
        <Items>
          <img src="/images/github.svg" />
          <MyButton type="button" size="large" fillColor={"#796cff"}>
            Sign In
          </MyButton>
          <MyButton type="button" size="large" fillColor={"#796cff"}>
            Sign Up
          </MyButton>
        </Items>
      </HeaderComp>
    </StyledComponentsRegistry>
  );
}
export default Home;
