module.exports = {
  tableName: 'Tour',
  attributes: {
    codigo: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
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
      type: 'float',
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
