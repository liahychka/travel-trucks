import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/movies' >Movies</NavLink>
      <hr />
    </div>
    
  )
}

export default Header