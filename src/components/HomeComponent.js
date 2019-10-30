import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring';
import ReactSearchBox from 'react-search-box';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 200}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 8 - 250}px,${x / 8 + 150}px,0)`
const trans5 = (x, y) => `translate3d(${x / 6 + 250}px,${y / 6 + 150}px,0)`
const trans6 = (x, y) => `translate3d(${x / 3 + 35}px,${y / 3 + 100}px,0)`
const trans7 = (x, y) => `translate3d(${x / 1.5 }px,${y / 1.5 - 200}px,0)`


function HomeComponent() {
    const [value, setValue] = useState("");
    
    useEffect(() => {
        setValue(value)
    }, value);

    const data = [
        {
          key: 'john',
          value: 'John Doe',
        },
        {
          key: 'jane',
          value: 'Jane Doe',
        },
        {
          key: 'mary',
          value: 'Mary Phillips',
        },
        {
          key: 'robert',
          value: 'Robert',
        },
        {
          key: 'karius',
          value: 'Karius',
        },
      ];
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return (    
        <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
            <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
            <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
            <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
            <animated.div className="card5" style={{ transform: props.xy.interpolate(trans5) }} />
            <animated.div className="card6" style={{ transform: props.xy.interpolate(trans6) }} />
            <animated.div className="card7" style={{ transform: props.xy.interpolate(trans7) }} />
        </div>
  )
}

export default HomeComponent
