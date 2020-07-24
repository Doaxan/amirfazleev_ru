import React from 'react'
import './App.css'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {Container, Navbar, Nav} from 'react-bootstrap'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

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
        subTitle: 'Project\'s',
        text: 'Проекты над которыми я работал',
      },
      about: {
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
                <Link className="nav-link" to="/">Главная</Link>
                <Link className="nav-link" to="/about">Обо мне</Link>
                <Link className="nav-link" to="/contact">Связаться со мной</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage
            title={this.state.home.title}
            subTitle={this.state.home.subTitle}
            text={this.state.home.text}
          />
          }/>

          <Route path="/about" exact render={() => <AboutPage
            title={this.state.about.title}
          />
          }/>

          <Route path="/contact" exact render={() => <ContactPage
            title={this.state.contact.title}
          />
          }/>

          <Footer/>

        </Container>
      </Router>
    )
  }
}

export default App
