const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: false,

  },
  
  tipo: {
    type: String,
    enum: ['sala', 'servicio'],
    required: true
  },

  wilaya: {
    type: String,
    required: false
  },

  commune: {
    type: String,
    required: false
  },


  selectedOptions: {
    type: Array,
    required: false,

  },

   
  specifications: {
    type: Array,
    required: false,
  },

  discripcion: {
    type: String,
    required: false
  },

  price: {
    type: Number,
    required: false
  },
   
  
  dinero: {
    type: String,
    required: false
  },

  negociable: {
    type: String,
    required: false

  },

  

  nomprenom: {
    type: String,
    required: false
  },

  telefono: {
    type: String,
    required: false
  },

  email: {
    type: String,
    required: false
  },
 
  
  privacidad_commentarios: {
    type: String,
    required: false
  },

  privacidad_informations: {
    type: String,
    required: false
  },


  images: {
    type: Array,
    required: true
  },

  estado: {
    type: String,
    enum: ['pendiente', 'aprovado', 'rechazado'],
    default: 'pendiente'
  },
 
  vistas: { type: Number, default: 0 },


  likes: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
  comments: [{ type: mongoose.Types.ObjectId, ref: 'comment' }],
  user: { type: mongoose.Types.ObjectId, ref: 'user' }
}, {
  timestamps: true
})
module.exports = mongoose.model('post', postSchema)