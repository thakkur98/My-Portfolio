import styled from 'styled-components';

const DashboardWrapper = styled.div`
  padding: 250px 20px 100px;
  max-width: 1200px;
  margin: 0 auto;
  line-height: 1.6;
  font-size: 16px;
  color: #333;
  animation: fadeIn 1.2s ease;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .profile-div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 60px;

    .profile-img img {
      border-radius: 50%;
      max-width: 100%;
      height: auto;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      transition: transform 0.3s ease;
    }

    .profile-img img:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    padding-top: 150px;

    .profile-div {
      flex-direction: column;
      gap: 30px;
      text-align: center;
    }

    .profile-img img {
      height: 250px;
      width: 250px;
    }
  }
`;

const Highlight = styled.div`
  max-width: 600px;

  p {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 32px;
    margin-bottom: 16px;
    color: #4f46e5;
    font-weight: 700;
    background: #e0e7ff;
    display: inline-block;
    padding: 6px 12px;
    border-radius: 8px;
  }

  h3 {
    font-size: 22px;
    margin: 30px 0 16px;
    color: #1f2937;
  }

  ul {
    list-style: square;
    padding-left: 20px;
    margin-bottom: 20px;

    li {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }

  strong {
    color: #4f46e5;
  }
`;

const MyProfile = () => {
  return (
    <DashboardWrapper>
      <div className='profile-div'>
        <div className='profile-img'>
          <img src="/images/photos/Mohit-profile.jpeg" alt="Mohit About" height={370} width={300} />
        </div>
        <Highlight>
          <p>Hello 👋, my name is</p>
          <h2>Mohit Bisht</h2>
          <p>
            I’m a <strong>Front-End Developer</strong> with <strong>3+ years</strong> of experience in building dynamic, responsive, and user-centric applications.
          </p>
          <p>
            I specialize in <strong>React</strong>, <strong>Next.js</strong>, <strong>Redux</strong>, and modern UI frameworks. I take pride in crafting interfaces that users love to use.
          </p>
          <h3>I am passionate about:</h3>
          <ul>
            <li>Crafting seamless user experiences ✨</li>
            <li>Translating creative designs into clean, maintainable code 🎨</li>
            <li>Collaborating with teams to deliver high-impact products 🤝</li>
          </ul>
          <p>
            I keep learning and improving every day, staying up-to-date with front-end trends and <strong>performance best practices</strong>.
          </p>
        </Highlight>
      </div>
    </DashboardWrapper>
  );
};

export default MyProfile;
