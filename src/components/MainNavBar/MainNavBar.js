import PropTypes from 'prop-types';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';


const MainNavBar = () =>{


        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        {/*<Router>*/}
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand>
                                    <Link to="/">Home</Link>
                                    {/*React Bootstrap Navbar*/}
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        {/*<Nav.Link href="/">Home</Nav.Link>*/}
                                        <Nav.Link href="/AboutUs">
                                            {/*<Link to="/AboutUs">About Us</Link>*/}
                                            Contact Us
                                        </Nav.Link>
                                        {/*<Nav.Link href="/contact-us">About Us</Nav.Link>*/}
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/noviKlijent">Novi Klijent</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    {/*<Form>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                        <Button variant="outline-success">Search</Button>
                                    </Form>*/}
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            {/*<Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/about-us">
                                    <AboutUs />
                                </Route>
                                <Route path="/contact-us">
                                    <ContactUs />
                                </Route>
                            </Switch>*/}
                        {/*</Router>*/}
                    </div>
                </div>
            </div>
        )  
}

export default MainNavBar;