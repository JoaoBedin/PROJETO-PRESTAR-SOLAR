
const zoom = document.getElementById('zoom');
const zoomImg = document.getElementById('zoom-img');

document.querySelectorAll('.project-img').forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
    zoomImg.src = img.src;
    zoom.style.visibility = 'visible';
  });
});

function Esconderdisplay(){
  
  zoom.style.visibility = 'hidden';

}







const myObserver = new IntersectionObserver( (entries) => {
entries.forEach((entry) => {

    if( entry.isIntersecting )
{entry.target.classList.add("show")}

else {entry.target.classList.remove("show")}

})
})

const itens = document.querySelectorAll(".hidden")

itens.forEach( (itens) => myObserver.observe(itens))








function ChangeNameFile(event) {
  const fileName = event.target.files[0]?.name || 'Nenhum arquivo selecionado';
  document.querySelector('.custom-file-label').innerText = fileName;
}



  const hamburgerButton = document.querySelector("#hamburgerButton")
const closeButton = document.querySelector("#closeButton")
const mobileMenu = document.querySelector(".mobile-menu")


hamburgerButton.addEventListener("click" , function(){
mobileMenu.classList.add("flex");

})

closeButton.addEventListener("click" , function(){
mobileMenu.classList.remove("flex");

})












const PngResidencial = document.querySelector('.button-residencial');
const PngRural = document.querySelector('.button-rural');
const PngUsina = document.querySelector('.button-usinas');
const images = document.querySelectorAll('.project-img');

function FiltrarProjetos(tipo) {
  console.log("Filtrando:", tipo);
  images.forEach((img) => {
    img.style.display = img.classList.contains(tipo) ? 'inline-block' : 'none';
  });
}

PngResidencial.addEventListener('click', () => FiltrarProjetos('residencial'));
PngRural.addEventListener('click', () => FiltrarProjetos('rural'));
PngUsina.addEventListener('click', () => FiltrarProjetos('usinas'));


