const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
  ID: Number,
  idUsuario: Number,
  DataHoraCadastro:	Date,
  Codigo: String,
  Nome: String,
  CPF_CNPJ: String,
  CEP: Number,
  Logradouro: String,
  Endereco: String,
  Numero: String,
  Bairro: String,
  Cidade: String,
  UF: String,
  Complemento: String,
  Fone: String,
  LimiteCredito: Number,
  Validade:	Date
})

module.exports = Person
