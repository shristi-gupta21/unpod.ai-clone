"use client";
import React from "react";
import styled from "styled-components";

const HeaderUI = styled.header`
  height: 4rem;
  padding: 0 3rem;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  height: 2rem;
`;

export const Header = () => {
  return (
    <HeaderUI>
      <Image src="/images/unpod-logo.svg" />
    </HeaderUI>
  );
};
