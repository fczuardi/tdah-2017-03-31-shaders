const regl = require('regl')();

const draw = regl({
    attributes: {
    },
    uniforms: {
    },
    vert: `
    void main() {
    }
    `,
    frag: `
    void main() {
    }    
    `,
    count: 0
});

module.exports = draw;
