import React from 'react'

import { GlobalStyle } from './componets/styles/GlobalStyle'
import { Logo } from './componets/Logo/'
import { NavBar } from './componets/NavBar/'
import { Router } from '@reach/router'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Fav } from './pages/Fav'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import Context from './Context'

const urlParams = new window.URLSearchParams(window.location.search)
const detailId = urlParams.get('detail')
console.log(detailId)

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' detailId={detailId} />
      </Router>
      <Context.Consumer>
        {
          ({ isAuth }) => (
            isAuth
              ? (<Router>
                <Fav path='/favs' />
                <User path='/user' />
                 </Router>)
              : (<Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
                 </Router>)
          )
        }
      </Context.Consumer>
      <NavBar />
    </div>
  )
}
