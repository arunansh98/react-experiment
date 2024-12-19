export default function withLogger(Component) {
  return function LoggerComponent(props) {
    console.log({ props });
    return <Component {...props} />;
  };
}
