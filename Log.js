// Registrando el componente en log-component.js
AFRAME.registerComponent('log', {
    schema: {
      message: {type: 'string', default: 'Holaaa, bienvenidos'}
    },
    init: function () {
        console.log(this.data.message);
      }
  });

