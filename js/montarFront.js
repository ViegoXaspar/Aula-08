import {shows, galleryImages} from "./objetos.js";

// montando o grid de shows
// passando o grid shows para o Js, sera nele onde os cards irao ficar]
const gridShows = document.querySelector('#gridShows');

// Montando o show dentro dos cards
shows.forEach(show => {
    gridShows.innerHTML += `
    <div class="col-md-6 col-lg-4 my-3">
                <div class="card">
                    <a href="" class="text-decoration-none text-dark">
                        <img src = "${show.banner}"
                        class = "card-img-top"
                        alt = "${show.artista}" loading="lazy">
                        <div class="card-body">
                            <h4 class = "my-3 bd-bottom">${show.artista}</h4>
                            <div class="d-flex justify-content-between">
                                <p>Local: ${show.local} </p>
                                <p>Data: ${show.data} </p>
                            </div>                          
                            <div class="d-flex justify-content-between">
                                <p>Horario: ${show.horario} </p>
                                <p>Ingresso: ${show.tipo_ingresso} </p>                                
                            </div>    
                </div>
                    </a>
    </div>
    `
})

// montando a geleria de imganes 
// recuperando o elemento do html

const galeria = document.querySelector('#gallery');

// montando a galeria, para isso iremos usar um forEach que ira percorrer um array de imagens. para cada imagem imagem será criada uma tag img com as classes correspondentes

galleryImages.forEach(images => {
    galeria.innerHTML += `
    <a href="${images.imagem}" data-lightbox="roadtrip" 
    data-title="${images.descricao}">
    <img src="${images.imagem}" alt="" loading="lazy" class="img-gallery" >
    </a>    
    `
})