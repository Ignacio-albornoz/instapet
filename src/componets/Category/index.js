import React from 'react'
import { Link, Image } from './styles'
const DEFAULT_IMAGE = 'https://pa1.narvii.com/7491/d8b2fb62d9bc8d6c042da4fd6ad5be92a8d97825r1-200-200_hq.gif'

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) => {
  return (
    <Link to={path}>
      <Image src={cover} />
      {emoji}
    </Link>
  )
}
