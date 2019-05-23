import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const Home = () => {
  return (
    <div>
      <Query query={GET_TRACKS_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <div>Loading</div>
          if (error) return <div>Error</div>
          return <div>{JSON.stringify(data)}</div>
        }}
      </Query>
    </div>
  )
}

const GET_TRACKS_QUERY = gql`
  {
    tracks {
      id
      title
      description
      url
      createdAt
    }
  }
`

export default Home;
