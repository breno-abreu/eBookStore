const axios = require('axios')
const prompt = require('prompt-sync')({sigint: true})

const url = "http://localhost:5050" 

class Admin{
    run(){
        
    }

    showeBookInformation(){
        const _bookid =prompt("ID do eBook que deseja ver: ")
        
        axios.get(url+'/showeBookInformation', {
            params: {
                bookid: _bookid
            }
        }).then(function(response){
            if(response.status == '200'){
                console.log(response.data)
            }
            else if(response.status == '100'){
                console.log("Nenhum eBook com esse id foi encontrado!")
            }
        }).catch(function(error){
            console.log(error)
        })
    }

    searchBook(){
        const _title =prompt("Título: ")
        
        axios.get(url+'/searchBook', {
            params: {
                title: _title
            }
        }).then(function(response){
            if(response.status == '200'){
                console.log(response.data)
            }
            else if(response.status == '100'){
                console.log("Nenhum eBook com esse título foi encontrado!")
            }
        }).catch(function(error){
            console.log(error)
        })
    }

    deleteBook(){
        const _bookid = prompt("ID do eBook que deseja excluir: ")
        
        axios.delete(url+'/deleteBook', {
            data: {
                bokkid = _bookid
            }
        }).then(function(response){
            if(response.status == '200'){
                console.log("O eBook foi excluído!")
            }
            else{
                console.log("Nenhum eBook com esse id foi encontrado!")
            }
        }).catch(function(error){
            console.log(error)
        })
    }

    modifyBook(){
        const _bookid = prompt("ID do eBook que deseja modificar: ")
        const _field = prompt("Campo que deseja modificar: ")
        const _newdata = prompt("Novo dado: ")

        axios.put(url+'/modifyBook', {
            bookid = _bookid,
            field = _field,
            newdata = _newdata
        }).then(function(response){
            if(response.status == '200'){
                console.log("O eBook foi modificado!")
            }
            else if(response.status == '100'){
                console.log("Nenhum eBook com esse id foi encontrado!")
            }
            else if(response.status == '101'){
                console.log("Nenhum campo com esse nome foi encontrado!")
            }
        }).catch(function(error){
            console.log(error)
        })
    }

    addBook(){
        const _title = prompt("Título: ")
        const _author = prompt("Autor: ")
        const _description = prompt("Descrição: ")
        const _price = prompt("Preço: ")
        const _language = prompt("Linguagem: ")
        const _nofpages = prompt("Número de Páginas: ")
        const _path = prompt("Endereço do Arquivo: ")

        axios.post(url+'/addBook', {
            title: _title,
            author: _author,
            description: _description,
            price: _price,
            language: _language,
            nofpages: _nofpages,
            path: _path
        }).then(function(response){
            if(response.status == '200'){
                console.log("O eBook foi adicionado com sucesso!")
            }
            else{
                console.log("Houve algum problema. O eBook não foi adicionado.")
            }
        }).catch(function(error){
            console.log(error)
        })
    }
}

module.exports = Admin