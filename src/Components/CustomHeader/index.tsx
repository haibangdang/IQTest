// libs
import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
// styled-components
import { CustomHeaderWrapper, LogoHeader } from './CustomHeader.styled';
// components
import { logo } from '../../../public/assets';
import { navLinks } from '../../constants';
import CustomButton from '../Shared/CustomButton';

const CustomHeader: FC = () => {
  return (
    <CustomHeaderWrapper>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <LogoHeader>
              <Image src={logo} alt="me" priority />
            </LogoHeader>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="ml-5">
            {navLinks.map((nav) => (
              <Nav className="ml-2" key={nav.id}>
                <Nav.Link href="#home">{nav.title}</Nav.Link>
              </Nav>
            ))}
          </Navbar.Collapse>
          <CustomButton title="Hello" />
        </Container>
      </Navbar>
    </CustomHeaderWrapper>
  );
};

export default CustomHeader;
