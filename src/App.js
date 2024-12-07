import { useEffect, useState } from "react";
import Text from "./components/Text";
import axios from "axios";
import Images from "./components/Images";

function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function searchImages() {
    console.log({ searchTerm });

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
        console.log({ response });
        const images = response.data.results.map((item) => item.urls.small);
        setImages(images);
      })
      .finally(() => {
        console.log("images loaded !!");
      });
  }

  useEffect(() => {
    console.log("useEffect running for the 1st time !");
    searchImages();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="test-class">
        <div className="flex flex-row justify-center">
          <Text value={searchTerm} onChange={setSearchTerm} />
          <button onClick={searchImages}>SEARCH!</button>
        </div>
        <Images images={images} />
      </div>
    </form>
  );
}

export default App;
