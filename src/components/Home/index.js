import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const Home = () => {
  return (
    <div>
      <Query query={ME_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <div>Loading</div>
          if (error) return <div>Error</div>
          return <div>{JSON.stringify(data)}</div>
        }}
      </Query>
    </div>
  )
}

// const GET_TRACKS_QUERY = gql`
//   {
//     tracks {
//       id
//       title
//       description
//       url
//       createdAt
//     }
//   }
// `
const ME_QUERY = gql`
  query {
    me {
      id
      username
      email
    }
  }
`

export default Home;
