import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  border-top: 2px solid var(--text-color);
  padding-top: 10px;
`;

const BlogLink = styled.a`
  color: var(--accent-color);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        &gt; MORE MURMURINGS:{" "}
        <BlogLink href="https://silv.blog">SILV.BLOG</BlogLink>
      </p>
    </FooterWrapper>
  );
};

export default Footer;
