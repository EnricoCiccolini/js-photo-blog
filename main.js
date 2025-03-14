
const urlClient = 'https://lanciweb.github.io/demo/api/pictures/'



const wallElement = document.getElementById('container-photo')


let result = ''
axios.get(urlClient).then((response) =>{
   // console.log(response.data['0'].url )
const ceck = response.data
  for (let i = 0; i < ceck.length; i++) {

    console.log (' sono nel ciclo')
 console.log(ceck[i])
 result = result + `
    <div class="col-12 col-md-6 col-lg-4 col-xl-4" style="width: 18rem;">
    <div class="card " style="width: 18rem;">
        <div class='p-4 position-static bg-light'>
            <div class="position-absolute top-0 start-50 translate-middle"><img src="img/pin.svg"
                    alt="puntina"></div>
                    <img src="${ceck[i].url}" class="card-img-top " alt=" ${ceck[i].title} ">
                <title>${ceck[i].title}</title>
                <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                    dy=".3em">${ceck[i].title}</text>
            </svg>
        </div>
        <div class="card-body">
            <p class="card-text">${ceck[i].date}</p>
        </div>
    </div>

</div>
</div>`


wallElement.innerHTML = result
}
    } )
    .catch(error => {
        console.log("errore ")
    })    





   
  
    