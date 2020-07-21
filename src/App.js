import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Container, Navbar, Nav} from 'react-bootstrap'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Amir Fazleev',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
      ],
      home: {
        title: 'Welcome!',
        subTitle: 'Subtitle',
        text: 'Checkout my projects below'
      },
      About: {
        title: 'About Me',
      },
      contact: {
        title: 'Let\'s talk!',
      },
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Amir Fazleev</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        </Container>
      </Router>
    )
  }
}

export default App
