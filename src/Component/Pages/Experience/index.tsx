import styled from "styled-components";

const ExperienceStyle = styled.div`
  margin: 200px auto 50px;
  max-width: 1200px;
  padding: 0 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;

  h2 {
    font-size: 28px;
    margin-bottom: 40px;
    color: #2c3e50;
    text-align: center;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 30px;
  }

  .card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    padding: 24px;
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: translateY(-6px);
  }

  h1 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 4px;
    color: #2c3e50;
  }

  h3 {
    font-size: 14px;
    font-weight: 500;
    color: #7f8c8d;
    margin-bottom: 12px;
  }

  ul {
    padding-left: 20px;
    margin-bottom: 16px;
  }

  li {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 8px;
    position: relative;
  }

  li::before {
    content: "•";
    color: #3498db;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  .tech-stack {
    margin-top: 10px;
  }

  .tech-stack p {
    display: inline-block;
    background: #f0f0f0;
    color: #333;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 13px;
    margin: 5px 6px 0 0;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    margin-top: 100px;
    padding: 0 16px;

    h1 {
      font-size: 18px;
    }

    h3 {
      font-size: 13px;
    }

    li {
      font-size: 13px;
    }

    .tech-stack p {
      font-size: 12px;
      padding: 5px 10px;
    }
  }
`;

const ExperienceDataArr = [
  {
    companyName: "Tradeindia - Infocom Network Limited",
    timePeriod: "Feb 2025 - Present",
    technologies: ["Next.js", "Styled-Components", "Redux", "Redux-Saga", "HTML5", "Javascript ES6", "Typescript"],
    workItems: [
      `Developed and maintained responsive web applications using Next.js, Styled Components, and Redux-Saga.`,
      `Collaborated on UI development for a major revamp project, ensuring modern design consistency and optimized performance.`,
      `Actively contributed to bug fixing, feature enhancements, and cross-browser compatibility improvements.`,
      `Ensured seamless integration of front-end components with backend APIs for smooth user experiences.`,
    ]
  },
  {
    companyName: "I-Exceed Solutions Private Limited, Bengaluru",
    timePeriod: "August 2021 - Feb 2025",
    technologies: ["React.js", "Css", "Redux", "HTML5", "Javascript ES6", "Ajax", "Agile", "MySql", "Next.js"],
    workItems: [
      `Contributed to the Citi Interest Optimization New product within Citibank's CRM dashboard, a tool for managing account pricing and interest rates. Designed and implemented responsive user interfaces using React.js, Redux, and Bootstrap, ensuring seamless functionality for account conversion and management features. Conducted debugging and performance testing to enhance application efficiency.`,
      `Played a key role in developing the Know Your Customer (KYC) sub-product, focused on account verification processes. Leveraged React.js, CSS, and Jest to build and test interactive UI components, ensuring compliance and robust system performance.`,
      `Worked on a consumer-facing application for web and mobile, offering features such as bill payments, deposits, and loan management. Utilized CSS, Redux, and third-party integrations like Plaid and Jack Henry to create efficient, user-friendly interfaces. Focused on debugging and optimizing UI components to enhance user experience.`,
      `Contributed to the M-Passbook Module within the Central Bank of India's mobile and web application. Developed advanced features for transaction statements, including filtering, exporting to email, and storing data locally using SQLite. Implemented advanced search capabilities, improving usability and customer satisfaction.`
    ]
  }
];

const Experience = () => {
  return (
    <ExperienceStyle>
      <h2>Experience</h2>
      <div className="grid">
        {ExperienceDataArr.map((item, index) => (
          <div className="card" key={index}>
            <div>
              <h1>{item.companyName}</h1>
              <h3>{item.timePeriod}</h3>
            </div>
            <ul>
              {item.workItems.map((workPoint, idx) => (
                <li key={idx}>{workPoint}</li>
              ))}
            </ul>
            <div className="tech-stack">
              {item.technologies.map((tech, techIndex) => (
                <p key={techIndex}>{tech}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ExperienceStyle>
  );
};

export default Experience;
