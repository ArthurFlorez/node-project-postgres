const path = require('path')
const db = require(path.resolve(__dirname, '../../db.config.js'))
const RepresentateLegal = db.representantes_legales;

// Post a representante_legal
exports.create = (req, res) => {	
	// Guarda los datos PostgreSQL database
	RepresentateLegal.create(req.body).then(representate_legal => {		
			// Envia a crear
			res.json(representate_legal);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
 
// Buscar todos
exports.findAll = (req, res) => {
	RepresentateLegal.findAll().then(representate_legal => {
			// Envia todos los representantes legales
			res.json(representate_legal);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
 
// Actualiza el representate
exports.update = (req, res) => {
	const id = req.body.id;
	RepresentateLegal.update( req.body, 
			{ where: {id: id} }).then(() => {
				res.status(200).json( { mgs: "Registro actualizado con éxito -> Representante legal Id = " + id } );
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
};

// Elimina por ID
exports.delete = (req, res) => {
	const id = req.params.id;
	RepresentateLegal.destroy({
			where: { id: id }
		}).then(() => {
			res.status(200).json( { msg: 'Registro eliminado -> Representante Id = ' + id } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
