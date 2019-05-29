import React, { Component } from 'react';
import Route from 'routes';
// import { Query } from 'react-apollo';
// import { gql } from 'apollo-boost';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header';

// const App = () => (
//   <Query query={ME_QUERY}>
//     {({ data, loading, error }) => {
//       if (loading) return <div>Loading</div>
//       if (error) return <div>{`Error: ${error}`}</div>
//       const currentUser = data.me;
//       return (
//         <BrowserRouter>
//           <Header currentUser={currentUser}/>
//           <Route />
//         </BrowserRouter>
//       )
//     }}
//   </Query>
// );
// const ME_QUERY = gql`
//   query{
//     me {
//       id
//       username
//       email
//     }
//   }
// `

// export default App;


// const currentUser = data.me

const App = () => (
  <BrowserRouter>
    <Header />
    <Route />
  </BrowserRouter>
);

export default App;
