import cm from './Hero.module.css'

const HeroText = ({
  subtitle,
  title,
  text,
}) => {
  return (
    <div>
      {subtitle && (
        <h3 className={cm.subtitle}>{subtitle}</h3>
      )}
      {title && (
        <h3 className={cm.title}>{title}</h3>
      )}
      {text && (
        <p className={cm.text}>{text}</p>
      )}
      <button>Ok. lets go</button>
    </div>
  )
}

export default HeroText