module.exports = {
  attributes: {
    codigo: {
      type: 'int',
      primaryKey: true
    },
    nombre: {
      type: 'string',
      required: true
    },
    fecha: {
      type: 'date',
      required: true
    },
    precio: {
      type: 'double',
      required: true
    },
    descripcion: {
      type: 'string',
      required: true
    },
    codigoEmpresa: {
      type: 'int',
      required: true
    }
  }
};
