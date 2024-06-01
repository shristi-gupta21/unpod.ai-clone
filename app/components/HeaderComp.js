"use client";
import React from "react";
import styled from "styled-components";
import { Layout } from "antd";
const { Header } = Layout;
const HeaderUI = styled(Header)`
  height: 4rem;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`;
const Image = styled.img`
  height: 2rem;
`;

export const HeaderComp = ({ children }) => {
  return (
    <HeaderUI>
      <Image src="/images/unpod-logo.svg" />
      {children}
    </HeaderUI>
  );
};
