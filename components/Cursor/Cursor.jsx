import { useState, useEffect, useCallback } from "react"

const SIZE_DEFAULT = 30
const SIZE_HOVER = 60

const Cursor = () => {
  const [pos, setPos] = useState([0,0])
  const [size, setSize] = useState(SIZE_DEFAULT)

  const handleMove = useCallback(e => {
    setPos([e.pageX, e.pageY])
    if(/button|a|img/.test(e.target.tagName.toLowerCase())) {
      setSize(SIZE_HOVER)
    } else {
      setSize(SIZE_DEFAULT)
    }
  })

  useEffect(() => {
    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mouseover', handleMove)
    }
  }, [])

  const [left, top] = pos
  return (
    <div style={{
      zIndex: 0,
      transition: 'width .2s, height .2s, opacity .2s',
      position: 'absolute',
      width: size,
      height: size,
      marginTop: -size/2,
      marginLeft: -size/2,
      background: 'red',
      borderRadius: '50%',
      opacity: size === SIZE_HOVER ? 1 : .5,
      top,
      left,
    }} />
  )
}

export default Cursor