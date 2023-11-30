import React from "react";
import  ReactDOM from "react-dom/client";
import ImageSlider from "./ImageSlider";

const App = ()=>{
    return(
<ImageSlider/>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)