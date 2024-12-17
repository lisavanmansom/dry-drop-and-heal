<script>
    import { onMount } from "svelte";
  
    let canvas;
    let gl;

    // Vertex Shader
    const vertexShaderSource = `
      attribute vec4 a_position;
      void main() {
        gl_Position = a_position;
      }
    `;
  
    // Fragment Shader
    const fragmentShaderSource = `
        precision mediump float;

        uniform vec2 iResolution;
        uniform float iTime;

        void mainImage(out vec4 O, vec2 F) {
        vec2 r = iResolution.xy; 
        O = vec4(0.0);
    
        float t = iTime * 0.04;

        for (float i = 0.0; i < 150.0; i++) {
            float y = sin(i * 0.1 + t);
            vec3 color = vec3(cos(i / 2.0) * 0.5 + 0.5, 0.0, 0.0); // Only red shades

        O += 0.05 / abs(
            length(
                1.3 * (F + F - r) / r.y + 
                vec2(cos(i * 4.0 + t * 40.0) * (y * 0.5 + 0.5), y) * 
                (1.0 + sin(y * 10.0) * 0.2)
            ) / 0.01 + cos(t + i) - 1.0
        ) * (y + 3.0) * vec4(color, 1.0);
    }
}
        

    void main() {
        vec4 color = vec4(0.0);
        mainImage(color, gl_FragCoord.xy);
        gl_FragColor = color;
    }`;
  
    onMount(() => {
      // Initialize WebGL
      gl = canvas.getContext("webgl");
   
      // Create Shaders
      const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
      const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
  
      // Create Program
      const program = createProgram(gl, vertexShader, fragmentShader);
      gl.useProgram(program);
  
      // Set up rectangle vertices to cover the screen
      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([
          -1, -1,
           1, -1,
          -1,  1,
          -1,  1,
           1, -1,
           1,  1
        ]),
        gl.STATIC_DRAW
      );
  
      const positionLocation = gl.getAttribLocation(program, "a_position");
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
  
      // Uniform locations
      const resolutionLocation = gl.getUniformLocation(program, "iResolution");
      const timeLocation = gl.getUniformLocation(program, "iTime");
  
      // Resize canvas
      function resizeCanvas() {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
  
      window.addEventListener("resize", resizeCanvas);
      resizeCanvas();
  
      // Animation loop
      let startTime = Date.now();
      function render() {
        const elapsedTime = (Date.now() - startTime) / 1000;
  
        // Set uniforms
        gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
        gl.uniform1f(timeLocation, elapsedTime);
  
        // Draw
        gl.drawArrays(gl.TRIANGLES, 0, 6);
  
        requestAnimationFrame(render);
      }
      render();
    });
  
    function compileShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    }
  
    function createProgram(gl, vertexShader, fragmentShader) {
      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      return program;
    }

  </script>
  
  <style>
    canvas {
      width: 100vw;
      height: 100vh;
      display: block;
    }
  </style>
  
  <canvas bind:this={canvas}></canvas>
  