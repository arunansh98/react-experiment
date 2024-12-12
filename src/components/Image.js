export default function Image(props) {
  // console.log({ props });
  const { url } = props;
  return <img src={url} alt="random" />;
}
