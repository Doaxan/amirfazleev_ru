import React from 'react'

import pinpointer from '../assets/pinpointer.png'
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
          subTitle: 'subTitle',
          imgSrc: pinpointer,
          link: 'https://pinpointer.se',
          selected: false,
        },

        {
          id: 1,
          title: 'Project 2',
          subTitle: 'subTitle',
          imgSrc: '',
          link: 'https://pinpointer.se',
          selected: false,
        },

        {
          id: 2,
          title: 'Project 3',
          subTitle: 'subTitle',
          imgSrc: '',
          link: 'https://pinpointer.se',
          selected: false,
        },
      ],
    }
  }

  handleCardClick = (id, card) => {
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
