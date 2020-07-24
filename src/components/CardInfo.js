import React from 'react'
import {useSpring, animated} from 'react-spring'

function CardInfo(props) {
  const style = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <animated.div className="g-card-info" style={style}>
      <p className="g-card-title">{props.title}</p>
      <p className="g-card-sub-title">{props.subTitle}</p>
      {props.stack && <p className="g-card-sub-title">Мой стек:</p>}
      <ul>
        {props.stack?.map((item, index) => <li key={index}>{item}</li>) }
      </ul>
      <a href={props.link} target="_blank" rel="noopener noreferrer">{props.link}</a>
    </animated.div>
  )
}

export default CardInfo
