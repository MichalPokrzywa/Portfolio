// src/components/ShaderBackground.js
import React, { useRef, useEffect } from 'react';

const vertexShaderSource = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl, vsSource, fsSource) {
  const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
  if (!vs || !fs) return null;

  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

export default function ShaderBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.warn('WebGL not supported');
      return;
    }

    let frameId;
    let program = null;
    let positionBuffer = null;
    let iResolutionLoc = null;
    let iTimeLoc = null;
    let resizeHandler = () => {};

    const shaderUrl = `${process.env.PUBLIC_URL}/shaders/background.glsl`;
    let cancelled = false;

    const initWithFragmentSource = (fragmentShaderSource) => {
      program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
      if (!program) return;

      gl.useProgram(program);

      // fullscreen quad
      positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      const positions = new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
         1,  1,
      ]);
      gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

      const aPositionLocation = gl.getAttribLocation(program, 'a_position');
      gl.enableVertexAttribArray(aPositionLocation);
      gl.vertexAttribPointer(aPositionLocation, 2, gl.FLOAT, false, 0, 0);

      iResolutionLoc = gl.getUniformLocation(program, 'iResolution');
      iTimeLoc = gl.getUniformLocation(program, 'iTime');

      const resize = () => {
        const dpr = window.devicePixelRatio || 1;
        const width = window.innerWidth * dpr;
        const height = window.innerHeight * dpr;
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        gl.viewport(0, 0, width, height);
        if (iResolutionLoc) {
          gl.uniform3f(iResolutionLoc, width, height, 1.0);
        }
      };

      resizeHandler = resize;
      resize();
      window.addEventListener('resize', resize);

      let startTime = performance.now();

      const render = (now) => {
        const t = (now - startTime) / 1000.0;
        if (iTimeLoc) {
          gl.uniform1f(iTimeLoc, t);
        }
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        frameId = requestAnimationFrame(render);
      };

      frameId = requestAnimationFrame(render);
    };

    // wczytanie shadera z pliku
    fetch(shaderUrl)
      .then((res) => res.text())
      .then((src) => {
        if (cancelled) return;
        initWithFragmentSource(src);
      })
      .catch((err) => {
        console.error('Failed to load fragment shader:', err);
      });

    return () => {
      cancelled = true;
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resizeHandler);
      if (program) gl.deleteProgram(program);
      if (positionBuffer) gl.deleteBuffer(positionBuffer);
    };
  }, []);

  return <canvas ref={canvasRef} className="shader-bg" />;
}
