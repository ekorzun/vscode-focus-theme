import cm from './Hero.module.css'

import cx from 'classnames'
import { useState, useEffect } from 'react'

import HeroText from './HeroText'
import {Carousel} from 'react-responsive-carousel'



const Hero = ({
  features = []
}) => {

  const [slide, setSlide] = useState(0)
  useEffect(() => {
    setTimeout(() =>{
      setSlide(1)
    }, 1000)
  }, [])

  return (
    <div className={cm.container}>
      <div className={cx(cm.pane, cm.left)}>

          {features
          .map((feature, index) => (
            <div
              key={index}
              className={cx(cm.slide, index === slide && cm.active)}
            >
              <HeroText
                subtitle='Hello, world'
                title='Hello'
                text='Focus on whatever'
              />
            </div>
          ))}

      </div>
      <div className={cx(cm.pane, cm.right)}>
        <img src={require('../../public/code.png')} />
      </div>

    </div>
  )
}

export default Hero