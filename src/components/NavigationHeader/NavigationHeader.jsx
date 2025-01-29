import { NavLink } from "react-router-dom";
import css from './NavigationHeader.module.css'

const NavigationHeader = () => {
  return (
    <div className={css.header}>
      <NavLink to='/' className={css.logo}>Travel<span className={css.spanLogo}>Trucks</span></NavLink>
      <div>
          <NavLink to='/' className={css.link}>Home</NavLink>
          <NavLink to='/catalog' className={css.link}>Catalog</NavLink>
      </div>

    </div>
    
  )
}

export default NavigationHeader