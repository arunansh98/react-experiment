import Image from "./Image";

export default function Images(props) {
  const { images } = props;
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {images?.map((image) => (
        <Image url={image} alt="random" />
      ))}
    </div>
  );
}
