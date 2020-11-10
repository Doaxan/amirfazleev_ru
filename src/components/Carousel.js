import React from 'react'

import pinpointer from '../assets/pinpointer.png'
import im from '../assets/im.jpg'
import privet from '../assets/privet.jpg'
import Card from './Card'
import {Container, Row} from 'react-bootstrap'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 0,
          title: 'Pinpointer',
          subTitle: 'Шведская система логистики промышленных отходов',
          stack: [
            'apollo-server-express, graphql',
            'MongoDB: mongoose, создание миграций',
            'SMTP: nodemailer',
            'CASL role-based авторизация',
            'Unit и Integration тесты Jest',
            'CI/CD: правка .gitlab-ci.yml',
            'docker-compose, orchestration',
            'Gitflow, code-review'
          ],
          imgSrc: pinpointer,
          link: 'https://pinpointer.se',
          selected: false,
        },

        {
          id: 1,
          title: 'Github',
          subTitle: 'Мой github аккаунт',
          imgSrc: im,
          link: 'https://github.com/Doaxan',
          selected: false,
        },

        {
          id: 2,
          title: 'Privet.name',
          subTitle: 'Анонимный видеочат',
          stack: [
              'FastAPI (Python)',
              'Vuetify (VueJS)',
              'WebRTC',
              'Websockets',
              'Caddy server (web server/proxy)'
          ],
          imgSrc: privet,
          link: 'https://Privet.name',
          selected: false,
        },
      ],
    }
  }

  handleCardClick = id => {
    const items = [...this.state.items]
    items[id].selected = !items[id].selected
    items.forEach(item => item.selected = item.id === id)

    this.setState({items})
  }

  makeItems = items => items.map(
    item =>
      <Card
        item={item}
        click={(e => this.handleCardClick(item.id, e))}
        key={item.id}
      />)

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    )
  }
}

export default Carousel
