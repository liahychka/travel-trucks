import React from 'react'
import { NavLink } from "react-router-dom";


const Movies = () => {
  return (
    <div>
      <NavLink to='/:moviesId'>Movies</NavLink>
    </div>
  )
}

export default Movies