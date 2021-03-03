module.exports = (sequelize, Sequelize) => {
	const RepresentanteLegal = sequelize.define('representante_legal', {
	  cedula: {
          type: Sequelize.STRING
      },
        nombre: {
			type: Sequelize.STRING
	  },
	  apellido: {
			type: Sequelize.STRING
	  },
	  correo_electronico: {
		  type: Sequelize.STRING
	  },
      telefono: {
          type: Sequelize.STRING
      },
      fecha_creacion: {
          type: Sequelize.DATE
      }
	});
	
	return RepresentanteLegal;
}



// const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// const mySchema = new Schema({
//     cedula: {
//         type: String,
//         required: true,
//     },
//     nombre: {
//         type: String,
//         required: true,
//     },
//     apellido: {
//         type: String,
//         required: true,
//     },
//     correo_electronico: {
//         type: String,
//         required: true,
//     },
//     telefono: {
//         type: String,
//         required: true,
//     },
//     fecha_creacion: {
//         type: Date,
//         required: true,
//     }
// })

// const model = mongoose.model('Representante_Legal', mySchema)
// module.exports = model