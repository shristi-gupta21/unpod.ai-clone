"use client";
import { Header } from "./components/Header";
import StyledComponentsRegistry from "./lib/registry";
import { Button } from "antd";
import { styled } from "styled-components";

const Items = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

export default function Home() {
  return (
    <StyledComponentsRegistry>
      <Header>
        <Items>
          <img src="/images/github.svg" />
          <Button
            type="primary"
            size="large"
            style={{ backgroundColor: "#796cff" }}
          >
            Sign In
          </Button>
          <Button
            type="primary"
            size="large"
            style={{ backgroundColor: "#796cff" }}
          >
            Sign Up
          </Button>
        </Items>
      </Header>
    </StyledComponentsRegistry>
  );
}
