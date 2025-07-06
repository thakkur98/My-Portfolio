import styled from "styled-components";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

const ContactSection = styled.div`
  margin: 0 auto 50px;
    
    padding: 0 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #222;
    display: flex
;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  h2 {
    font-size: 32px;
    margin-bottom: 30px;
    color: #4f46e5;
    text-align: center;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 18px;
    margin-top: 40px;

    a {
      color: #4f46e5;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    a:hover {
      text-decoration: underline;
    }

    svg {
      color: #4f46e5;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 26px;
    }

    .contact-info {
      font-size: 16px;
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <h2>Contact Me</h2>

      <div className="contact-info">
        <a href="mailto:mohitbisht17101998@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope /> mohitbisht17101998@gmail.com
        </a>

        <a href="tel:+919876543210">
          <FaPhoneAlt /> +91 7906420977
        </a>

        <a href="https://www.linkedin.com/in/mohit-bisht-03a110152/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> linkedin.com/in/mohit-bisht-03a110152
        </a>
      </div>
    </ContactSection>
  );
};

export default Contact;
