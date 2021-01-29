import React from 'react'
import { Category } from '../Category/index'
import { categories } from '../../db.json'

import { List, Item } from './styles'
console.log(categories)

export const ListOfCategories = () => {
  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}
