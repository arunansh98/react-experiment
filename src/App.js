import { useCallback, useEffect, useState } from "react";
import Text from "./components/Text";
import axios from "axios";
import Images from "./components/Images";
import Button from "./components/Button";
import Count from "./components/Count";
import PropDrilling from "./components/prop-drilling-playground/PropDrilling";
import Context from "./components/prop-drilling-playground/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Parent from "./components/hooks/forward-ref/Parent";

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
      .catch((error) => {
        console.error({ error });
      })
      .finally(() => {
        // console.log("images loaded !!");
      });
  }, [searchTerm]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  const Base = () => {
    return (
      // <Parent />
      <form onSubmit={handleSubmit}>
        <div className="test-class">
          <div className="flex flex-row justify-center">
            <Text value={searchTerm} onChange={setSearchTerm} />
            <Button onClick={searchImages}>SEARCH!</Button>
          </div>
          <Images images={images} />
          <Count />
          <PropDrilling />
          <Context />
        </div>
      </form>
    );
  };

  const Secondary = () => "Secondary Component";

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Base}></Route>
        <Route path="secondary" Component={Secondary}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
