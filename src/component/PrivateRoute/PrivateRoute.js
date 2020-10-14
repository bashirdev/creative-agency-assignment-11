// import React from 'react';
// const { Route, Redirect } = require("react-router-dom");

// function PrivateRoute({ children, ...rest }) {
//     return (
//       <Route
//         {...rest}
//         render={({ location }) =>
//           fakeAuth.isAuthenticated ? (
//             children
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: { from: location }
//               }}
//             />
//           )
//         }
//       />
//     );
//   }