import styled from 'styled-components';
import Image from 'next/image';
const AboutMeStyle = styled.div`
  margin: 0 auto 50px;
  max-width: 1200px;
  padding: 0 20px;

  h1 {
    font-size: 32px;
    text-align: center;
    color: #2c3e50;
  }

  .about-me {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
    gap: 40px;

    .desc-section {
      width: 60%;

      p {
        font-size: 18px;
        line-height: 1.6;
        font-weight: 400;
        color: #333;
        margin-bottom: 20px;
      }

      .tech-skill-title {
        margin: 20px 0;

        p {
          font-weight: 700;
          font-size: 18px;
          color: #2c3e50;
        }
      }

      .tech-skills {
        column-count: 2;
        column-gap: 40px;
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .tech-skills li {
        break-inside: avoid;
        margin-bottom: 10px;
        font-size: 16px;
        color: #444;
      }

      .tech-skills li::before {
        content: "✅ ";
        margin-right: 8px;
        font-size: 16px;
      }
    }

    .img-section {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 100%;
        height: auto;
        border-radius: 12px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 150px;

    .about-me {
      flex-direction: column;

      .desc-section,
      .img-section {
        width: 100%;
      }

      .img-section {
        margin-top: 30px;
      }
    }
  }
`;

const AboutMe = () => {
  return (
    <AboutMeStyle>
      <div>
        <h1>😎 About Me</h1>
      </div>
      <div className='about-me'>
        <div className='desc-section'>
        <p>
          As a Software Engineer, I bring a problem-solving mindset, strong coding skills,
          and a passion for building reliable and efficient software systems. I enjoy collaborating
          with cross-functional teams, designing scalable solutions, and continuously learning
          new technologies. Whether it&apos;s developing features, optimizing performance, or contributing
          to clean architecture, I&apos;m committed to writing maintainable code and delivering
          meaningful impact through technology.
        </p>

          <div className='tech-skill-title'>
            <p>Tech Skills:</p>
          </div>
          <ul className='tech-skills'>
            <li>Next.Js</li>
            <li>React.js</li>
            <li>Javascript</li>
            <li>Html5</li>
            <li>Css (Styled Component)</li>
            <li>Node.Js</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className='img-section'>
          <Image
            src="/images/photos/Mohit-about.jpeg"
            height={300}
            width={500}
            alt="About-Me"
          />
        </div>
      </div>
    </AboutMeStyle>
  );
};

export default AboutMe;
