module.exports = {
  formularioCreacion: function (req, res) {
    res.view('Tour/Creacion');
  },
  crear: function (req, res) {
    var tour = {
      nombre: req.body.nombre,
      fecha: req.body.fecha,
      precio: parseInt(req.body.precio),
      descripcion: req.body.descripcion,
      codigoEmpresa: 1
    };
    sails.log.debug(tour);
    Tour.create(tour, function (err) {
      if (err) {
        sails.log.error(err);
        return res.view('Tour/Creacion', {mensaje: 'Ocurrio un error al crear el tour'});
      }
      res.view('Tour/Creacion', {mensaje: 'Creado con exito'});
    });
  },
  mostrarListado: function (req, res) {

    Tour.find({}, function (err, tours) {
      sails.log.debug(tours);
      if (err) {
        sails.log.error(err);
        return res.view('Tour/Ver', {mensaje: 'Ocurrio un error al mostrar los tours'});
      }
      res.view('Tour/Ver', {tours: tours});
    });
  }
};
