import { useContext } from 'react'
import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favourites-context'

function MainNavigation() {

  const favouritesCtx = useContext(FavoritesContext)

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add New Meetup</Link>
          </li>
          <li>
            <Link to='/favourites'>
              My Favourites
              <span className={classes.badge}>
                {favouritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;