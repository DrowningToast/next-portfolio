uniform sampler2D waterBaseColor;

varying vec2 vertexUV;

void main () {
    
    gl_FragColor = vec4(texture2D(waterBaseColor, vertexUV).xyz, 1.0);

}