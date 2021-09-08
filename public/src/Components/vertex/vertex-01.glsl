varying vec2 vUv;
uniform float time;

void main() {
  vUv = uv;
  vec3 p = vec3(position.x, position.y, position.z);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}