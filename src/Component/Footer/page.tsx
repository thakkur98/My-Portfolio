import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  padding: 32px 20px;
  background-color: #f3f4f6;
  text-align: center;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 16px;
`;

const FooterLink = styled.a`
  color: #4f46e5;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s ease;

  &:hover {
    color: #3730a3;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 8px;

  a {
    font-size: 20px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        🚀 Built with passion by{' '}
        <FooterLink href="https://github.com/thakkur98/My-Portfolio" target="_blank" rel="noopener noreferrer">
          Mohit Bisht
        </FooterLink>
      </FooterText>
      <SocialLinks>
        <FooterLink href="https://github.com/thakkur98/My-Portfolio" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </FooterLink>
        <FooterLink href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </FooterLink>
      </SocialLinks>
      <FooterText>© {new Date().getFullYear()} Mohit Bisht. All rights reserved.</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
