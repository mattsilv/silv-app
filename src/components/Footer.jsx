import React from "react";
import styled from "styled-components";
// Explicitly import from the package
import { Link as RouterLink, useLocation } from "react-router-dom";

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
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledRouterLink = styled(RouterLink)`
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
  align-items: center;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 12px;
  font-size: 16px;
`;

const SocialLabel = styled.span`
  color: var(--text-color);
  margin-right: 8px;
`;

const IconSvg = styled.svg`
  width: 20px;
  height: 20px;
  fill: currentColor;
  stroke: currentColor;
  stroke-width: 0;
`;

// X (Twitter) icon
const XIcon = () => (
  <IconSvg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </IconSvg>
);

// Warpcast icon (simplified W)
const WarpcastIcon = () => (
  <IconSvg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6,4L10,20L12,13L14,20L18,4" strokeWidth="2" stroke="currentColor" fill="none" />
  </IconSvg>
);

// Blog/Website icon
const BlogIcon = () => (
  <IconSvg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="14 2 14 8 20 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="9" y1="15" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="9" y1="11" x2="15" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </IconSvg>
);

// LinkedIn icon
const LinkedInIcon = () => (
  <IconSvg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </IconSvg>
);

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <FooterWrapper>
      <SocialLinksContainer>
        <SocialLabel>FOLLOW ME:</SocialLabel>
        <Link href="https://x.com/mattsilv" target="_blank" rel="noopener noreferrer">
          <XIcon /> @mattsilv
        </Link>
        <Link href="https://warpcast.com/silv.eth" target="_blank" rel="noopener noreferrer">
          <WarpcastIcon /> silv.eth
        </Link>
        <Link href="https://silv.blog" target="_blank" rel="noopener noreferrer">
          <BlogIcon /> silv.blog
        </Link>
        <Link href="https://www.linkedin.com/in/mattsilv/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon /> LinkedIn
        </Link>
      </SocialLinksContainer>
      <FooterLinksContainer>
        {!isHomePage && <StyledRouterLink to="/">Back to silv.app</StyledRouterLink>}
        <StyledRouterLink to="/privacy">Privacy Policy</StyledRouterLink>
      </FooterLinksContainer>
    </FooterWrapper>
  );
};

export default Footer;
