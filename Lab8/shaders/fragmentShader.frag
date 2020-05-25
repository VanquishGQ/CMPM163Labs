uniform sampler2D texture1;
varying vec2 vUv;

void main() {
    // sample from the texture based on the uv coordinates
   // gl_FragColor = texture2D(texture1, vUv / vec2(0.5, 0.5));
    vec2 tmp = vUv / vec2(0.5, 0.5);

    if (vUv.x > 0.5 && vUv.y < 0.5) {
        gl_FragColor = texture2D(texture1,tmp - vec2(1.0, 0.0));
    } else if(vUv.x < 0.5 && vUv.y > 0.5) {
        gl_FragColor = texture2D(texture1,tmp - vec2(0.0, 1.0));
    } else if(vUv.x > 0.5 && vUv.y > 0.5) {
        gl_FragColor = texture2D(texture1,tmp - vec2(1.0, 1.0));
    } else {
        gl_FragColor = texture2D(texture1, tmp);
    }
}
