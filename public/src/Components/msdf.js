var assign = require('object-assign');

import gradientTexture from '../assests/gradient-map.png';

module.exports = function createMSDFShader (opt) {
  opt = opt || {};
  var opacity = typeof opt.opacity === 'number' ? opt.opacity : 1;
  var alphaTest = typeof opt.alphaTest === 'number' ? opt.alphaTest : 0.0001;
  var precision = opt.precision || 'highp';
  var color = opt.color;
  var map = opt.map;
  var negate = typeof opt.negate === 'boolean' ? opt.negate : true;

  // remove to satisfy r73
  delete opt.map;
  delete opt.color;
  delete opt.precision;
  delete opt.opacity;
  delete opt.negate;

  return assign({
    uniforms: {
      opacity: { type: 'f', value: opacity },
      time: { type: 'f', value: 0 },
      viewport: { type: 'v2', value: new THREE.Vector2(window.innerWidth,window.innerHeight) },
      uMouse: { type: 'v2', value: new THREE.Vector2(0,0) },
      gradientMap: { type: 't', value: new THREE.TextureLoader().load(gradientTexture) },
      map: { type: 't', value: map || new THREE.Texture() },
      color: { type: 'c', value: new THREE.Color(color) }
    },
    vertexShader: 
    `
    // #define attribute in
    // #define varying out
    // #define texture2D texture
    // precision highp float;
    // precision highp int;
    // #define HIGH_PRECISION
    // #define SHADER_NAME ShaderMaterial
    // #define VERTEX_TEXTURES
    //       attribute vec2 uv;
    //       attribute vec4 position;
    //       uniform mat4 projectionMatrix;
    //       uniform mat4 modelViewMatrix;
          varying vec2 vUv;
          void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix *vec4( position, 1.0 );
         }
          `
    ,
    fragmentShader: `
    
    // #define varying in
    // out highp vec4 pc_fragColor;
    // #define gl_FragColor pc_fragColor
    // #define gl_FragDepthEXT gl_FragDepth
    // #define texture2D texture
    // #define textureCube texture
    // #define texture2DProj textureProj
    // #define texture2DLodEXT textureLod
    // #define texture2DProjLodEXT textureProjLod
    // #define textureCubeLodEXT textureLod
    // #define texture2DGradEXT textureGrad
    // #define texture2DProjGradEXT textureProjGrad
    #define textureCubeGradEXT textureGrad
    #ifdef GL_OES_standard_derivatives
    #extension GL_OES_standard_derivatives : enable
    #endif
    precision highp float;
    precision highp int;
      uniform float opacity;
      uniform vec2 uMouse;
      uniform vec2 viewport;
      uniform float time;
      uniform vec3 color;
      uniform sampler2D map;
      uniform sampler2D gradientMap;
      varying vec2 vUv;

      float median(float r, float g, float b) {
        return max(min(r, g), min(max(r, g), b));
      }

      float createCircle() {
          vec2 viewportUv = gl_FragCoord.xy / viewport;
          float viewportAspect = viewport.x / viewport.y;

          vec2 mousePoint = vec2(uMouse.x, 1.0 - uMouse.y);
          float circleRadius = max(0.0, 100. / viewport.x) ;

          vec2 shapeUv = viewportUv - mousePoint;
          shapeUv /= vec2(1.0, viewportAspect);
          shapeUv += mousePoint;

          float dist = distance(shapeUv, mousePoint);
          dist = smoothstep(circleRadius, circleRadius + 0.001, dist);
          return dist;
          // return uMouse.y;
      }

      void main() {
        float circle = createCircle();
        float width = 0.1;
        float lineProgress = 0.3;
        vec3 mysample = texture2D(map, vUv).rgb;
        float gr = texture2D(gradientMap, vUv).r;

        float sigDist = median(mysample.r, mysample.g, mysample.b) - 0.5;
        float fill = clamp(sigDist/fwidth(sigDist) + 0.5, 0.0, 1.0);
        

        // stroke
        float border = fwidth(sigDist);
        float outline  = smoothstep(0.,border,sigDist);
        outline  *= 1.-  smoothstep(width - border,width,sigDist);


        // gradient
        float grgr = fract(3.*gr + time/5.);
        float start = smoothstep(0.,0.01,grgr);
        float end = smoothstep(lineProgress,lineProgress -0.01,grgr);
        float mask = start*end;
        mask = max(0.2,mask);

        float finalAlpha = outline*mask + fill*circle;

        gl_FragColor = vec4(color.xyz, fill * opacity);
        gl_FragColor = vec4(color.xyz, finalAlpha);

        // gl_FragColor = vec4(vec3(outline), fill);
        // gl_FragColor = vec4(vec3(circle), fill);
       if (gl_FragColor.a < 0.001) discard;
      }
    `
  }, opt);
};










