import { Route, Switch } from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupsPage from './pages/NewMeetups'
import FavoritesPage from './pages/Favourites'
import Layout from './components/layout/Layout'

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <AllMeetupsPage />
          </Route>
          <Route path='/new-meetup'>
            <NewMeetupsPage />
          </Route>
          <Route path='/favorites'>
            <FavoritesPage />
          </Route>
        </Switch>
      </Layout>

    </div>
  );
}

export default App;
