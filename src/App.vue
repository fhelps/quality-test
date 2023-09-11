<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'


</script>



<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <RouterView /> -->
    <div id="app">
        <div class="container">
            <br>
            <h1 class="content"> Usuários</h1>
            <br>
            <div class="form-todo form-group">
                <div class="content">
                    <div class="">
                          <p>
                            <input placeholder="Codigo" 
                              type="text"
                              name="Codigo" 
                              v-model="user.Codigo" 
                              :class="['form-control', this.valids.isInvalidCodigo ? 'is-invalid' : '', this.valids.isValidCodigo ? 'is-valid' : '']"
                              />
                          </p>
                          <p>
                            <input placeholder="Nome" 
                              type="text"
                              name="Nome" 
                              v-model="user.Nome" 
                              :class="['form-control', this.valids.isInvalidNome ? 'is-invalid' : '', this.valids.isValidNome ? 'is-valid' : '']"
                               />
                          </p>
                          <p>
                              <input placeholder="CPF / CNPJ" 
                              type="text"
                              name="CPF_CNPJ"
                              v-model="user.CPF_CNPJ" 
                              :class="['form-control', this.valids.isInvalidCPF_CNPJ ? 'is-invalid' : '', this.valids.isValidCPF_CNPJ ? 'is-valid' : '']"

                              />
                          </p>
                          <p>
                              <input placeholder="CEP" 
                              type="text"
                              name="CEP"
                              v-model="user.CEP"  
                              v-on:focusout="preencherCEP(user.CEP)"
                              :class="['form-control', this.valids.isInvalidCEP ? 'is-invalid' : '', this.valids.isValidCEP ? 'is-valid' : '']"/>
                          </p>
                          <p>
                              <input placeholder="Fone" 
                              type="text"
                              name="Fone" 
                              v-model="user.Fone"  
                              :class="['form-control', this.valids.isInvalidFone ? 'is-invalid' : '', this.valids.isValidFone ? 'is-valid' : '']"
                              />
                          </p>
                          <p>
                              <input placeholder="Limite de Credito" 
                              type="number"
                              name="LimiteCredito" 
                              v-model="user.LimiteCredito"  
                              :class="['form-control', this.valids.isInvalidLimiteCredito ? 'is-invalid' : '', this.valids.isValidLimiteCredito ? 'is-valid' : '']"
                               />
                            </p>
                            <p>
                              <label for="Validade">Validade:</label>
                              <input
                              type="date"
                              name="Validade" 
                              v-model="user.Validade"  
                              :class="['form-control', this.valids.isInvalidValidade ? 'is-invalid' : '', this.valids.isValidValidade ? 'is-valid' : '']" />
                          </p>
                      </div>
                      <div>
                          <p>
                              <input placeholder="Logradouro" 
                              type="text"
                              name="Logradouro" 
                              v-model="user.Logradouro" 
                              :class="['form-control', this.valids.isInvalidLogradouro ? 'is-invalid' : '', this.valids.isValidLogradouro ? 'is-valid' : '']" />
                          </p>
                          <p>
                              <input placeholder="Numero" 
                              type="number"
                              name="Numero" 
                              v-model="user.Numero" 
                              :class="['form-control', this.valids.isInvalidNumero ? 'is-invalid' : '', this.valids.isValidNumero ? 'is-valid' : '']"  />
                          </p>
                          <p>
                              <input placeholder="Bairro" 
                              type="text"
                              name="Bairro" 
                              v-model="user.Bairro"
                              :class="['form-control', this.valids.isInvalidBairro ? 'is-invalid' : '', this.valids.isValidBairro ? 'is-valid' : '']"  />

                          </p>
                          <p>
                              <input placeholder="Cidade" 
                              type="text"
                              name="Cidade"
                              v-model="user.Cidade" 
                              :class="['form-control', this.valids.isInvalidCidade ? 'is-invalid' : '', this.valids.isValidCidade ? 'is-valid' : '']"  />
                          </p>
                          <p>
                              <input placeholder="UF" 
                              type="text"
                              name="UF" 
                              v-model="user.UF" 
                              :class="['form-control', this.valids.isInvalidUF ? 'is-invalid' : '', this.valids.isValidLimiteUF ? 'is-valid' : '']"  />
                          </p>
                          <p>
                              <input placeholder="Complemento" 
                              type="text"
                              name="Complemento"
                              v-model="user.Complemento" 
                              :class="['form-control', this.valids.isInvalidComplemento ? 'is-invalid' : '', this.valids.isValidComplemento ? 'is-valid' : '']" />
                          </p>
                          
                          <div>
                              <button v-on:click.prevent="salvar()" type="submit" class="btn btn-primary"> Salvar </button>        
                              <li v-for="(erro, index) of errors" :key="index">
                                  Campo <b>{{index}}</b> - {{ erro.value }}
                              </li>
                          </div>
                      </div>
                    </div>
            </div>
            <hr/>
            <table class="table">
                <thead>
                    <tr>
                      <th scope="col">Action</th>
                      <th scope="col">#</th>
                      <th scope="col">idUsuario</th>
                      <th scope="col">Codigo</th>
                      <th scope="col">Nome</th>
                      <th scope="col">CPF/CNPJ</th>
                      <th scope="col">CEP</th>
                      <th scope="col">Fone</th>
                      <th scope="col">Limite de Credito</th>
                      <th scope="col">DataHoraCadastro</th>
                      <th scope="col">Validade</th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in users">
                      <th scope="row">
                        <a  href="#" title="Excluir" v-on:click.prevent="excluir(user._id, index)"> Excluir</a> <br/>
                        <a  href="#" title="Editar" v-on:click.prevent="editar(user)"> Editar</a> 
                      </th>
                      <th scope="row">{{user.ID}}</th>
                      <td>{{user.idUsuario}}</td>
                      <td>{{user.Codigo}}</td>
                      <td>{{user.Nome}}</td>
                      <td>{{user.CPF_CNPJ}}</td>
                      <td>{{user.CEP}}</td>
                      <td>{{user.Fone}}</td>
                      <td>R$ {{user.LimiteCredito}},00</td>
                      <td>{{new Date(user.DataHoraCadastro).toUTCString()}}</td>
                      <td>{{new Date(user.Validade).toLocaleDateString()}}</td> 
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import User from './services/users'
import { HttpStatusCode } from 'axios';

export default {

  data(){
    return {
      user: {
      },
      users: [],
      valids: {}
    }
  },

  mounted(){
    this.listar()
  },
  methods:{
    listar(){
      User.listar().then(user => {
        this.users = user.data
      })
    },
    excluir(id, index){
      console.log(id)
      User.remover(id).then(()=>{
        this.listar()
      }).catch( e => {
        this.errors = e
        console.log(e.response.data)
      })
    },
    salvar(){
      if(!this.validarCampos()){
          return 
      }
      this.user.idUsuario = 1000+this.users.length+1
      this.user.ID = this.users.length+1
      this.user.Validade = new Date(this.user.Validade).toUTCString()
      this.user.DataHoraCadastro = new Date().toUTCString()
      if(!this.user._id){
        User.salvar(this.user).then(resposta =>{
          alert('Salvo com sucesso!')
          this.listar()
          this.errors = []
          this.user = {}
          this.valids = {}
        }).catch(e=>{
          this.errors = e.response.data.erro.errors
          console.log(e.response.data)
        })
      }else{
        User.atualizar(this.user).then(resposta =>{
          alert('Atualizado com sucesso!')
          this.errors = []
          this.user = {}
          this.valids = {}
        }).catch(e=>{
          this.errors = e.response.data.erro.errors
          console.log(e.response.data)
        })
      }
    },
    editar(user_edit) {
      this.user = user_edit;
    },
    preencherCEP(cep){
      User.buscaCep(cep).then(resposta =>{
        console.log(resposta)
        this.user.Logradouro = resposta.data.logradouro
        this.user.Bairro = resposta.data.bairro
        this.user.Cidade = resposta.data.localidade
        this.user.UF = resposta.data.uf
        this.user.Complemento = resposta.data.complemento 
      })
    },
    validarCampos(){
      console.log(this.user.Codigo)
      let isValid = true;

      if(!this.user.Codigo){
        this.valids.isInvalidCodigo = true
        this.valids.isValidCodigo = false
        isValid = false;
      }else{
        this.valids.isValidCodigo = true
        this.valids.isInvalidCodigo = false
      }

      if(!this.user.Nome){
        this.valids.isInvalidNome = true
        this.valids.isValidNome = false
        isValid = false;
      }else{
        this.valids.isValidNome = true
        this.valids.isInvalidNome = false
      }

      if(!this.user.CPF_CNPJ){
        this.valids.isInvalidCPF_CNPJ = true
        this.valids.isValidCPF_CNPJ = false
        isValid = false;
      }else{
        this.valids.isValidCPF_CNPJ = true
        this.valids.isInvalidCPF_CNPJ = false
      }

      if(!this.user.CEP){
        this.valids.isInvalidCEP = true
        this.valids.isValidCEP = false
        isValid = false;
      }else{
        this.valids.isValidCEP = true
        this.valids.isInvalidCEP = false
      }

      if(!this.user.Fone){
        this.valids.isInvalidFone = true
        this.valids.isValidFone = false
        isValid = false;
      }else{
        this.valids.isValidFone = true
        this.valids.isInvalidFone = false
      }

      if(!this.user.LimiteCredito){
        this.valids.isInvalidLimiteCredito = true
        this.valids.isValidLimiteCredito = false
        isValid = false;
      }else{
        this.valids.isValidLimiteCredito = true
        this.valids.isInvalidLimiteCredito = false
      }

      if(!this.user.Validade){
        this.valids.isInvalidValidade = true
        this.valids.isValidValidade = false
        isValid = false;
      }else{
        this.valids.isValidValidade = true
        this.valids.isInvalidValidade = false
      }

      if(!this.user.Logradouro){
        this.valids.isInvalidLogradouro = true
        this.valids.isValidLogradouro = false
        isValid = false;
      }else{
        this.valids.isValidLogradouro = true
        this.valids.isInvalidLogradouro = false
      }

      if(!this.user.Numero){
        this.valids.isInvalidNumero = true
        this.valids.isValidNumero = false
        isValid = false;
      }else{
        this.valids.isValidNumero = true
        this.valids.isInvalidNumero = false
      }

      if(!this.user.Bairro){
        this.valids.isInvalidBairro = true
        this.valids.isValidBairro = false
        isValid = false;
      }else{
        this.valids.isValidBairro = true
        this.valids.isInvalidBairro = false
      }

      if(!this.user.Cidade){
        this.valids.isInvalidCidade = true
        this.valids.isValidCidade = false
        isValid = false;
      }else{
        this.valids.isValidCidade = true
        this.valids.isInvalidCidade = false
      }

      if(!this.user.UF){
        this.valids.isInvalidUF = true
        this.valids.isValidUF = false
        isValid = false;
      }else{
        this.valids.isValidUF = true
        this.valids.isInvalidUF = false
      }

      if(!this.user.Complemento){
        this.valids.isInvalidComplemento = true
        this.valids.isValidComplemento = false
        isValid = false;
      }else{
        this.valids.isValidComplemento = true
        this.valids.isInvalidComplemento = false
      }

      this.listar()
      return isValid
    }
  },
  formatReal( int ){
    var tmp = int+'';
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if( tmp.length > 6 )
            tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    return tmp;
  }
}
</script>
