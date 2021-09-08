import vertex1 from "./vertex/vertex-01.glsl";
import vertex2 from "./vertex/vertex-02.glsl";
//In case other shaders used later
// import vertex1 from "./vertex/vertex-01.glsl";
// import vertex2 from "./vertex/vertex-02.glsl";
// import vertex1 from "./vertex/vertex-01.glsl";
// import vertex2 from "./vertex/vertex-02.glsl";


import fragment1 from "./fragment/fragment-01.glsl";
import fragment2 from "./fragment/fragment-02.glsl";
//In case other shaders used later
// import vertex1 from "./vertex/vertex-01.glsl";
// import vertex2 from "./vertex/vertex-02.glsl";
// import vertex1 from "./vertex/vertex-01.glsl";
// import vertex2 from "./vertex/vertex-02.glsl";


export const shaders = [
  { vertex: vertex1, fragment: fragment1 },
  { vertex: vertex2, fragment: fragment2 },
//   { vertex: vertex3, fragment: fragment3 },
//   { vertex: vertex4, fragment: fragment4 },
//   { vertex: vertex5, fragment: fragment5 },
//   { vertex: vertex6, fragment: fragment6 },
//   { vertex: vertex7, fragment: fragment7 },

];
