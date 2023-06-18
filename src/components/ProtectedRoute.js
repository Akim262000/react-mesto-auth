import { Route, Navigate } from "react-router-dom";

const ProtectedRoute =({component: Component, ...props}) => {
  return (
    <Route>
      {() => {
        props.loggeedIn ? <Component {...props} /> : <Navigate to="/sign-in" />;
      }}
    </Route>
  );
};

export default ProtectedRoute;