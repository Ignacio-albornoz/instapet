import React from 'react'
import { ListOfCategories } from '../componets/ListOfCategories/index'
import { ListOfPhotoCards } from '../container/ListOfPhotoCard'

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}
