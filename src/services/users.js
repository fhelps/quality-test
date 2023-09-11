import { http, httpCorreios } from './config'

export default {
    listar:() => {
        return http.get('person')
    },
    salvar:(user) =>{
        return http.post('person', user)
    },
    remover:(id) =>{
        return http.delete('person/'+id)
    },
    atualizar:(user) => {
        return http.patch('person/'+user._id, user)
    },
    buscaCep:(cep) => {
        return httpCorreios.get('ws/'+cep+'/json/')
    }
}