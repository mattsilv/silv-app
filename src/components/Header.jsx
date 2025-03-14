import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
  position: relative;
  display: inline-block;

  &::after {
    content: "_";
    animation: blink 1s infinite;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: var(--accent-color);
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>silv.app</Title>
      <Subtitle>&gt; CTO, vibe coder, AI enthusiast</Subtitle>
    </HeaderWrapper>
  );
};

export default Header;
