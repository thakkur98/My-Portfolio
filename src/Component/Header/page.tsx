import { useState } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.nav`
  width: 100%;
  padding: 16px 32px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 12px 20px;
  }
`;

const Logo = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #4f46e5;
  cursor: pointer;
`;
interface NavLinksProps {
  isOpen: boolean;
}

const NavLinks = styled.ul<NavLinksProps>`
  display: flex;
  gap: 64px;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;

  button {
    padding: 10px 20px;
    color: #fff;
    background-color: #4f46e5;
    border: 1px solid transparent;
    cursor: pointer;
  }

  button:hover {
    color: #4f46e5;
    background-color: #fff;
    border: 1px solid #4f46e5;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background: white;
    position: absolute;
    top: 53px;
    left: 0;
    width: 100%;
    padding: 20px 0;
    gap: 20px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const NavItem = styled.li`
  cursor: pointer;
  font-weight: 500;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #4f46e5;
  }
`;

const MenuButton = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #4f46e5;
    margin: 5px 0;
    transition: 0.4s;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 const handleScrollTo = (desktop: number, mobile: number) => {
  const isMobile = window.innerWidth <= 768;
  window.scrollTo({
    top: isMobile ? mobile : desktop,
    behavior: 'smooth',
  });
  setMenuOpen(false);
};


  return (
    <HeaderWrapper>
      <Logo onClick={() => handleScrollTo(0,0)}>MOHIT PORTFOLIO</Logo>

      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        <div />
        <div />
        <div />
      </MenuButton>

      <NavLinks isOpen={menuOpen}>
        <NavItem onClick={() => handleScrollTo(700, 1200)}>About</NavItem>
        <NavItem onClick={() => handleScrollTo(1600, 2500)}>Experience</NavItem>
        <NavItem onClick={() => handleScrollTo(2500, 3800)}>Acheivement</NavItem>
        <NavItem onClick={() => handleScrollTo(3300, 4000)}>Contact</NavItem>
        <button onClick={() => window.open('/pdf/MohitBisht.pdf', '_blank')}>Resume</button>
      </NavLinks>
    </HeaderWrapper>
  );
};

export default Header;
