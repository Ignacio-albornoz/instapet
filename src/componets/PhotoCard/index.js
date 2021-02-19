import React from 'react'
import { Article, ImgWrapper, Image } from './styles'
import { Link } from '@reach/router'
import { useLocalStorage } from '../hooks/useLocalStore'
import { useNearScreen } from '../hooks/useNearScreen'
import { FavButton } from '../FavButton/index'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [showPhotoCard, element] = useNearScreen()

  return (
    <Article ref={element}>
      {
        showPhotoCard && <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Image src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  !liked && toggleLike({ variables: { input: { id } } })
                  setLiked(!liked)
                }
                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>
        </>
      }
    </Article>
  )
}
