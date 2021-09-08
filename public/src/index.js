import "./styles.css";
import WebGLFont from "./Components/WebGLFont";
import { shaders } from "./Components/import_shaders";

//Parameters to be passed to the main font 
const type = new WebGLFont({
  word: "WINTER\n OF CODE",
  position: [-335, -35, 0],
  rotation: [Math.PI, 0, 0],
  zoom: 200,
  vertex: shaders[1].vertex,                   
  fragment: shaders[1].fragment,
  index: 1                              // Index required for shaders that require different(slighlty changed) three-bmfont MSDF shader for generating text
});                         