import { NavLink } from "react-router-dom"
import css from "./HomePage.module.css"

const HomePage = () => {
  return (
    <div>
      <div className={css.hero}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.textHero}>You can find everything you want in our catalog</p>
        <NavLink to='/catalog' className={css.btnViewNow}>View Now</NavLink>
      </div>
    </div>
  )
}
export default HomePage