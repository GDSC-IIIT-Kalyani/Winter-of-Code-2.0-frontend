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
    vertexShader: `
//To be filled with custom shader
      `
    ,
    fragmentShader: `
    //To be filled with custom shader
 
    `
  }, opt);
};










