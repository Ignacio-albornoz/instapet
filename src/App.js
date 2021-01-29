import React from 'react'

import { GlobalStyle } from './componets/styles/GlobalStyle'
import { ListOfCategories } from './componets/ListOfCategories/index'
import { ListOfPhotoCards } from './componets/ListOfPhotoCards/index'
import { Logo } from './componets/Logo/index'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  )
}
