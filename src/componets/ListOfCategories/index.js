import React, { useState, useEffect } from 'react'
import { Category } from '../Category/index'

import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(function () {
    setLoading(true)
    window.fetch('https://instapet-bci0mbu3v.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return (onScroll) => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading ? [0, 1, 2, 3, 4, 5].map(loading => <Item key={loading}><Category /></Item>)
          : categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
