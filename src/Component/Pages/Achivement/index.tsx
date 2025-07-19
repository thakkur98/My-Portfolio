import styled from "styled-components";

const AchivementStyle = styled.div`
  margin: 200px auto 50px;
  max-width: 1200px;
  padding: 0 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;

  h2 {
    font-size: 32px;
    margin-bottom: 40px;
    color: #4f46e5;
    text-align: center;
  }

  ul {
    list-style-type: none;
    padding: 0;
    max-width: 800px;
    margin: 0 auto;
  }

  li {
    background: #f9f9f9;
    border-left: 4px solid #4f46e5;
    padding: 16px 24px;
    margin-bottom: 16px;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    font-size: 18px;
  }

  @media (max-width: 768px) {
    margin: 100px auto 40px;

    h2 {
      font-size: 26px;
    }

    li {
      font-size: 16px;
      padding: 12px 18px;
    }
  }
`;

const Achivement = () => {
  return (
    <AchivementStyle>
      <h2>Achievements</h2>
      <ul>
        <li>Awarded "Best Newcomer" for delivering key modules ahead of schedule at IExceed.</li>
        <li>Completed Jira Fundamentals Badge from Atlassian University.</li>
        <li>Represented school in Basketball (Cluster Level).</li>
        <li>Completed Certificate Course in Python and Node.js.</li>
      </ul>
    </AchivementStyle>
  );
};

export default Achivement;
