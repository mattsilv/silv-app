import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyles from "../GlobalStyles";

const PrivacyContainer = styled.div`
  padding: 20px 0;
`;

const Section = styled.section`
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: var(--text-color);
`;

const SectionTitle = styled.h2`
  font-size: 26px;
  margin-bottom: 12px;
  color: var(--accent-color);
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  line-height: 1.4;
  font-size: 20px;
`;

const List = styled.ul`
  margin-left: 25px;
  margin-bottom: 15px;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
  line-height: 1.4;
  font-size: 20px;
`;

const Link = styled.a`
  color: var(--accent-color);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Privacy = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <PrivacyContainer>
        <Title>Privacy Policy</Title>

        <Section>
          <SectionTitle>Introduction</SectionTitle>
          <Paragraph>
            Argent Labs LLC ("we", "our", "us") respects your privacy and is
            committed to protecting your personal data.
          </Paragraph>
          <Paragraph>
            This Privacy Policy explains how we collect, use, store, protect,
            and share your personal information when you:
          </Paragraph>
          <List>
            <ListItem>
              Visit silv.app or other domains of ours that reference this
              Privacy Policy (collectively, the "Site")
            </ListItem>
            <ListItem>Use our web applications ("Apps")</ListItem>
            <ListItem>Interact with our social media pages</ListItem>
            <ListItem>
              Connect with us in other related ways, including any events
            </ListItem>
          </List>
          <Paragraph>
            By using the Site or Apps, you confirm that you have read and
            understood this Privacy Policy and our use of your personal data.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>What Information We Collect</SectionTitle>
          <Paragraph>
            We collect minimal personal information needed to provide our
            services:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Device Information:</strong> Information about your
              device, including device type, operating system, browser type, IP
              address, and device identifiers.
            </ListItem>
            <ListItem>
              <strong>Usage Information:</strong> How you interact with our
              services, including features used and time spent on the platform.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>How We Use Your Information</SectionTitle>
          <Paragraph>
            We use the information we collect for the following purposes:
          </Paragraph>
          <List>
            <ListItem>To provide and maintain our services</ListItem>
            <ListItem>To improve and personalize your experience</ListItem>
            <ListItem>
              To communicate with you about updates and support
            </ListItem>
            <ListItem>
              To protect the security and integrity of our platform
            </ListItem>
            <ListItem>To comply with legal obligations</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>How We Share Your Information</SectionTitle>
          <Paragraph>
            We do not sell or rent your personal information to third parties.
            We may share your information in the following situations:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Service Providers:</strong> With third-party service
              providers who help us operate our business.
            </ListItem>
            <ListItem>
              <strong>Legal Requirements:</strong> When required by law or to
              protect our rights.
            </ListItem>
            <ListItem>
              <strong>Business Transfers:</strong> In connection with a merger,
              acquisition, or sale of all or a portion of our assets.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Your Rights</SectionTitle>
          <Paragraph>
            Depending on your location, you may have certain rights regarding
            your personal information, including:
          </Paragraph>
          <List>
            <ListItem>The right to access your personal information</ListItem>
            <ListItem>The right to correct inaccurate information</ListItem>
            <ListItem>The right to delete your personal information</ListItem>
            <ListItem>The right to restrict or object to processing</ListItem>
            <ListItem>The right to data portability</ListItem>
          </List>
          <Paragraph>
            To exercise these rights, please contact us using the information in
            the "Contact Us" section.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Data Security</SectionTitle>
          <Paragraph>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Data Retention</SectionTitle>
          <Paragraph>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required or permitted by law.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Cookies and Tracking</SectionTitle>
          <Paragraph>
            Our site uses minimal cookies necessary for operation. We use
            analytics to understand how our site is being used, but this data is
            anonymized.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Changes to This Privacy Policy</SectionTitle>
          <Paragraph>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last Updated" date.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Contact Us</SectionTitle>
          <Paragraph>
            If you have any questions about this Privacy Policy, please{" "}
            <Link href="https://argentlabs.xyz/contact/">contact us</Link>.
          </Paragraph>
        </Section>
      </PrivacyContainer>
      <Footer />
    </>
  );
};

export default Privacy;
