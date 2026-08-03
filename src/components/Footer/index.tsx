import styled from '@emotion/styled';

const Container = styled.footer`
  color: #fff;
  padding: 2rem;
  background-color: #333;
  min-height: 8rem;
`;
const FooterText = styled.p`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;
const SocialMediaLink = styled.a`
  text-decoration: none;
  color: #fff;
  margin-right: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <Container>
      <FooterText>© 2023 My Company. All rights reserved.</FooterText>
      <SocialMediaLink
        href='https://facebook.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        Facebook
      </SocialMediaLink>
      <SocialMediaLink
        href='https://twitter.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        Twitter
      </SocialMediaLink>
      <SocialMediaLink
        href='https://instagram.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        Instagram
      </SocialMediaLink>
    </Container>
  );
};

export default Footer;
