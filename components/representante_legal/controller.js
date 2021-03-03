// const use = require('./network')
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

// Encuentra un representante por ID
exports.findById = (req, res) => {	
	RepresentateLegal.findById(req.params.id).then(representate_legal => {
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









// const use = require('./network')
// const storage = require('./storage')

// function addRepresentanteLegal(cedula, nombre, apellido, correo_electronico, telefono) {
//     return new Promise( (resolve, reject) => {
//         if (!cedula) {
//             console.error('[MensajeControlado] No hay representante legal.')
//             return reject('No existe representante legal.')
//         }
//         // Se crea un objeto representante
//         const fullRepresentanteLegal = {
//             cedula: cedula,
//             nombre: nombre,
//             apellido: apellido,
//             correo_electronico: correo_electronico,
//             telefono: telefono,
//             fecha_creacion: new Date(),
//         }
//         console.log( fullRepresentanteLegal )
//         storage.add( fullRepresentanteLegal )
//         return resolve( fullRepresentanteLegal )
//     })
// }

// function updateRepresentanteLegal(id_representante_legal, cedula, nombre, apellido, correo_electronico, telefono) {
//     return new Promise( async (resolve, reject) => {
//         if (!id_representante_legal) {
//             reject(  'No existe ID del representante legal.' )
//         }
//         const fullRepresentanteLegal = {
//             cedula: cedula,
//             nombre: nombre,
//             apellido: apellido,
//             correo_electronico: correo_electronico,
//             telefono: telefono,
//         }
//         const result = await storage.update( id_representante_legal, fullRepresentanteLegal )
//         resolve( result )
//     } )
// }

// function getRepresentantesLegales( filtroRepresentanteLegal ) {
//     return new Promise((resolve, reject) => {
//         resolve( storage.list( filtroRepresentanteLegal ) )
//     })
// }

// function deleteRepresentanteLegal(id_representante_legal) {
//     return new Promise( (resolve, reject) => {
//         if (!id_representante_legal) {
//             reject('No existe el representante legal.')
//         }
//         storage.remove(id_representante_legal)
//             .then((data) => resolve(data))
//             .catch((error) => reject(error))
//     } )
// }

// module.exports = {
//     addRepresentanteLegal,
//     getRepresentantesLegales,
//     updateRepresentanteLegal,
//     deleteRepresentanteLegal,
// }