
const urlClient = 'https://lanciweb.github.io/demo/api/pictures/'


axios.get(urlClient).then((response) =>{
    console.log(response.data)
    
    } )
    .catch(error => {
        console.log("errore ")
    })    