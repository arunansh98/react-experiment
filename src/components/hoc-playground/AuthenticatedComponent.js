export default function withAuthentication(Component) {
  return function AuthenticatedComponent(props) {
    const isAuthenticated = localStorage.getItem("authToken");
    if (!isAuthenticated) {
      return <div>User is not authenticated to access the application !</div>;
    }
    return <Component {...props} />;
  };
}
