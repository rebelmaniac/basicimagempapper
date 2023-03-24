import React from "react";
import ImageMapper from "react-img-mapper";
import JSON from "./area.json";
import image from "./rockWall.jpg";

const App = (props) => {
  const URL = image;
  const MAP = {
    name: "my-map",
    // GET JSON FROM BELOW URL AS AN EXAMPLE
    areas: JSON,
  };

  return <ImageMapper src={URL} map={MAP} parentWidth={500} responsive />;
};
export default App;
