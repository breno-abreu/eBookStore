const User = require('./user')

class Customer extends User{
    run(){

    }

    buy(){
        const _bookid = prompt("ID do livro que deseja comprar: ")

        axios.post(url+'/buy', {
            bookid = _bookid,
        }).then(function(response){
            if(response.status == '200'){
                console.log("O eBook foi comprado!")
            }
            else if(response.status == '100'){
                console.log("Nenhum eBook com esse id foi encontrado!")
            }
        }).catch(function(error){
            console.log(error)
        })
    }

    download(){
        const _bookid = prompt("ID do livro que deseja baixar: ")

        axios.get(url+'/download', {
            params: {
                bookid: _bookid
            }
        }).then(function(response){
            if(response.status == '200'){
                console.log("O eBook foi baixado!")
            }
            else if(response.status == '100'){
                console.log("Nenhum eBook com esse id foi encontrado!")
            }
        }).catch(function(error){
            console.log(error)
        })
    }

    rate(){
        const _bookid = prompt("ID do livro que deseja avaliar: ")
        const _rating = prompt("Qual a nota?(de 0 à 5): ")

        axios.post(url+'/rate', {
            bookid = _bookid,
            rating = _rating
        }).then(function(response){
            if(response.status == '200'){
                console.log("O eBook foi avaliado!")
            }
            else if(response.status == '100'){
                console.log("Nenhum eBook com esse id foi encontrado!")
            }
        }).catch(function(error){
            console.log(error)
        })
    }

    showAll(){
        axios.get(url+'/show-all', {
            params: {
                userid: this.userid
            }
        }).then(function(response){
            if(response.status == '200'){
                console.log("Ebooks: ")
            }
            else if(response.status == '100'){
                console.log("Nenhum eBook com esse id foi encontrado!")
            }
        }).catch(function(error){
            console.log(error)
        })
    }
}

module.exports = Customer