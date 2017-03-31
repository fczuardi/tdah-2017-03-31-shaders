const regl = require('regl')();

const draw = regl({
    attributes: {
        position: [
            [0, 0, 0],
            [-1, 0, 0],
            [0, -1, 0]
        ]
    },
    uniforms: {
    },
    vert: `
    attribute vec3 position;
    void main() {
        gl_Position = vec4(position, 0);
    }
    `,
    frag: `
    void main() {
        gl_FragColor = vec4(1, 0, 0, 1);
    }    
    `,
    count: 3
});

module.exports = draw;
