import ImageItem from "./ImageItem";

function ImageList({ imagesPlaceholder }) {
  return (
    <div className="imageList">
      {imagesPlaceholder.map((image, index) => {
        return <ImageItem key={index} image={image}></ImageItem>;
      })}
    </div>
  );
}

export default ImageList;
