import { useState } from "react";
import "./App.css";
import SearchHeader from "./SearchHeader";
import searchImage from "./api";
import ImageList from "./components/ImageList";


function App() {
  const [images,setImages] = useState([])
  const handleSubmit =async (value) => {
    const result = await searchImage(value);
    setImages(result)
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit}></SearchHeader>
      <ImageList imagesPlaceholder= {images}></ImageList>
    </div>
  );
}

export default App;
