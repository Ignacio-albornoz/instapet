import React from 'react'
import { Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

export const FavButton = ({ onClick, liked, likes }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Button onClick={onClick}>
      <Icon size='24px' />
      {likes} likes!
    </Button>
  )
}
