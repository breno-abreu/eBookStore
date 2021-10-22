const axios = require('axios')
const prompt = require('prompt-sync')({sigint: true})

class User{
    constructor(userid){
        this.userid = userid
    }

    showInformation(){
        const _bookid = prompt("ID do eBook que deseja ver: ")
        
        axios.get(url+'/show-information', {
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

    search(){
        const _title = prompt("Título: ")
        
        axios.get(url+'/search', {
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
}

module.exports = User