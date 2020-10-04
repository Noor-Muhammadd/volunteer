import React, { useContext } from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Container fluid>
            <Container>
                <Navbar expand="lg" className="fixed">
                    <Navbar.Brand><Link to="/home"><img src="https://iili.io/2VACFV.png" style={{width: 200}} className="d-inline-block align-top" alt=""/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="/" className="navLink font-weight-bold">Home</Link>
                            <Link to="/" className=" navLink font-weight-bold">Donation</Link>
                            <Link to="/" className="navLink font-weight-bold">Events</Link>
                            <Link to="/" className="navLink font-weight-bold">Blog</Link>
                            <Link to="/userRegister" className="navLink font-weight-bold">{loggedInUser.name}</Link>
                            {!loggedInUser.isSiggnedIn && <Link to="/login" className="navLink btn btn-primary pr-4 pl-4">Register</Link>}
                            {!loggedInUser.isSiggnedIn && <Link to="/login" className="navLink btn btn-dark pr-4 pl-4">Admin</Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Container>
    );
};

export default Header;