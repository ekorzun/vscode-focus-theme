import Cursor from "../Cursor/Cursor"


const Layout = ({
  children
}) => {
  return (
    <div>
      <Cursor />
      {children}
    </div>
  )
}

export default Layout