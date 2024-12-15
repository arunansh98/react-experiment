import { useCallback, useEffect, useState } from "react";
import Text from "./components/Text";
import axios from "axios";
import Images from "./components/Images";
import Button from "./components/Button";
import Count from "./components/Count";

function App() {
  console.log("parent component rendered!");

  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // console.log("useEffect running for the 1st time !");
    searchImages();
  }, []);

  const searchImages = useCallback(() => {
    // console.log({ searchTerm });

    const params = {
      client_id: "0KwJEPjKLZkzlMZXrdnCorDwE1_dlQBcygXbUBqcYYg",
      page: 1,
      query: searchTerm || "default",
    };
    axios
      .get("https://api.unsplash.com/search/photos", {
        params,
      })
      .then((response) => {
        // console.log({ response });
        const images = response.data.results.map((item) => item.urls.small);
        setImages(images);
      })
      .finally(() => {
        // console.log("images loaded !!");
      });
  }, [searchTerm]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="test-class">
        <div className="flex flex-row justify-center">
          <Text value={searchTerm} onChange={setSearchTerm} />
          <Button onClick={searchImages}>SEARCH!</Button>
        </div>
        <Images images={images} />
        <Count />
      </div>
    </form>
  );
}

export default App;
