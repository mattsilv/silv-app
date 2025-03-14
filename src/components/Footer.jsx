import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  margin-top: 20px;
  text-align: center;
  font-size: 19px;
  border-top: 2px solid var(--border-color);
  padding-top: 15px;
`;

const Link = styled.a`
  color: var(--accent-color);
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 12px;
  font-size: 19px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        &gt; MORE MURMURINGS:{" "}
        <Link href="https://silv.blog">SILV.BLOG</Link>
      </p>
      <SocialLinksContainer>
        <Link href="https://x.com/mattsilv" target="_blank" rel="noopener noreferrer">
          @mattsilv
        </Link>
        <Link href="https://warpcast.com/silv.eth" target="_blank" rel="noopener noreferrer">
          silv.eth
        </Link>
      </SocialLinksContainer>
    </FooterWrapper>
  );
};

export default Footer;
