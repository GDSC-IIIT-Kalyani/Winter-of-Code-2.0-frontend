#ifdef GL_OES_standard_derivatives
#extension GL_OES_standard_derivatives : enable
#endif

varying vec2 vUv;
uniform vec2 viewport;
uniform vec2 uMouse;
float createCircle() {
    vec2 viewportUv = gl_FragCoord.xy / viewport;
    float viewportAspect = viewport.x / viewport.y;

    vec2 mousePoint = vec2(uMouse.x, 1.0 - uMouse.y);
    float circleRadius = max(0.0, 150. / viewport.x) ;

    vec2 shapeUv = viewportUv - mousePoint;
    shapeUv /= vec2(1.0, viewportAspect);
    shapeUv += mousePoint;

    float dist = distance(shapeUv, mousePoint);
    dist = smoothstep(circleRadius, circleRadius + 0.001, dist);
    return dist;
    // return uMouse.y;
}

void main()	
{
	float circle = 1. - createCircle();
	float dist = length(gl_PointCoord - vec2(0.5));
	float disc = smoothstep(0.5,0.45,dist);
	// vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
	gl_FragColor = vec4(1.,0.,0.0,1.);
	gl_FragColor = vec4(disc*circle);
	if(disc<0.01) discard;
}