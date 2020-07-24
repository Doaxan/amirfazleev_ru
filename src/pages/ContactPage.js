import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'

function ContactPage(props) {
  return (
    <div>
      <Hero title={props.title}/>
      <Content>
        <h5 className="font-weight-light">
          <p>Email: <a href="mailto:hello@doaxan.me">hello@doaxan.me</a></p>
          <p>Telegram: <a href="https://t.me/doaxan">@doaxan</a></p>
        </h5>
      </Content>
    </div>
  )
}

export default ContactPage
