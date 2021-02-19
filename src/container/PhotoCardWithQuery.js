import { fromPromise, gql } from 'apollo-boost'
import React from 'react'
import { PhotoCard } from '../componets/PhotoCard/index'

import { Query } from 'react-apollo'

const GET_SIGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading</p>
  if (error) return <p>Loading</p>
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (

  <Query query={GET_SIGLE_PHOTO} variables={{ id }}>

    {renderProp}

  </Query>
)
