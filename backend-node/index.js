// config inicial
require ('dotenv').config()
const express = require('express')
const app = express()


// depois do db
const mongoose = require('mongoose')

const Person = require('./models/Person')
// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', '*');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

// rotas
app.post('/person', async (req, res) => {
  const { ID, idUsuario, DataHoraCadastro, Codigo, Nome, CPF_CNPJ, CEP, Logradouro, Endereco, Numero, Bairro, Cidade, UF, Complemento, Fone, LimiteCredito, Validade} = req.body

  const person = {
    ID,
    idUsuario,
    DataHoraCadastro,
    Codigo,
    Nome,
    CPF_CNPJ,
    CEP,
    Logradouro,
    Endereco,
    Numero,
    Bairro,
    Cidade,
    UF,
    Complemento,
    Fone,
    LimiteCredito,
    Validade,
  }

  try {
    
    await Person.create(person)

    res.status(201).json(person)

  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/person', async (req, res) => {
  try {
    const people = await Person.find()

    res.status(200).json(people)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/person/:id', async (req, res) => {
  const id = req.params.id

  try {
    const person = await Person.findOne({ _id: id })

    if (!person) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(person)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.patch('/person/:id', async (req, res) => {
  try {

    console.log('Chamou Patch: ' + req.params.id)

  const id = req.params.id

  const {ID, idUsuario, DataHoraCadastro, Codigo, Nome, CPF_CNPJ, CEP, Logradouro, Endereco, Numero, Bairro, Cidade, UF, Complemento, Fone, LimiteCredito, Validade} = req.body

    const person = {
      ID,
      idUsuario,
      DataHoraCadastro,
      Codigo,
      Nome,
      CPF_CNPJ,
      CEP,
      Logradouro,
      Endereco,
      Numero,
      Bairro,
      Cidade,
      UF,
      Complemento,
      Fone,
      LimiteCredito,
      Validade,
    }

    const updatedPerson = await Person.updateOne({ _id: id }, person)

    if (updatedPerson.matchedCount === 0) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(person)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.delete('/person/:id', async (req, res) => {
  const id = req.params.id
 
  const person = await Person.findOne({ _id: id })
  if (!person) {
    res.status(422).json({ message: 'Usuário não encontrado!' })
    return
  }

  try {
    await Person.deleteOne({ _id: id })

    res.status(200).json({ message: 'Usuário removido com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/', (req, res) => {
  res.json({ message: 'Oi Express!' })
})

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

//conexao banco
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@orizoncluster.gj6jnaa.mongodb.net/banco-api?retryWrites=true&w=majority`,
  )
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))





  