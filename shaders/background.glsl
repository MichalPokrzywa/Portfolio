precision highp float;

uniform vec3 iResolution;
uniform float iTime;

vec2 noise(vec2 p)
{
    float x = dot(p, vec2(123.4, 234.5));
    float y = dot(p, vec2(345.6, 456.7));
    vec2 tmpNoise = vec2(x,y);
    tmpNoise = sin(tmpNoise);
    tmpNoise = tmpNoise * 43758.5453;
    tmpNoise = fract(tmpNoise);
    return tmpNoise;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord/iResolution.xy;

    vec3 col = vec3(1.0);
    uv = uv*16.0;
    vec2 currentGridId = floor(uv);
    vec2 currentGridCoord = fract(uv);
    currentGridCoord = currentGridCoord - 0.5;

    vec2 redGridUv = currentGridCoord;
    redGridUv = abs(redGridUv);
    float distToEdgeOfGridCell = 2.0 * max(redGridUv.x, redGridUv.y);
    vec3 redGridColor = vec3(smoothstep(0.9,1.0,distToEdgeOfGridCell),0.0,0.0);

    vec3 color1 = vec3(0.49, 0.25, 0.51);
    //vec3(0.64, 0.13, 0.62);
    vec3 color2 = vec3(0.03, 0.08, 0.31);
    //vec3(0.12, 0.51, 0.57);
    float mixValue = distance(uv,vec2(0.0,8.0))/8.0;
    vec3 col2 = mix(color1,color2,mixValue);
    float pointsOnGrid = 0.0;
    float minDistFromPixel = 100.0;

    for(float i = -1.0; i <= 1.0; i++)
    {
        for(float j = -1.0; j <= 1.0; j++)
        {
            vec2 adjGridCoords = vec2(i,j);
            vec2 pointOnAdjGrid = adjGridCoords;

            vec2 n = noise(currentGridId + adjGridCoords);
            pointOnAdjGrid  = adjGridCoords + sin( iTime * n) * 0.8;
            float dist = length(currentGridCoord - pointOnAdjGrid);
            minDistFromPixel = min(dist,minDistFromPixel);
            pointsOnGrid += smoothstep(0.95,0.96,1.0 - dist);
        }
    }
    vec3 pointsOnGridColor = vec3(pointsOnGrid);

    //col = vec3(col2.x,col2.y,minDistFromPixel + col.z/4.0);
    col = vec3(col2.x,col2.y,col.z - minDistFromPixel);
    fragColor = vec4(col,1.0);
}

void main() {
    vec4 color;
    mainImage(color, gl_FragCoord.xy);
    gl_FragColor = color;
}
