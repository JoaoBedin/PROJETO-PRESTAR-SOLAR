

/* .img-mulher-prestar, .element-story-about-prestar, .article-services, .article-investment, .form-orcament   */

const myObserver = new IntersectionObserver( (entries) => {
entries.forEach((entry) => {

    if( entry.isIntersecting )
{entry.target.classList.add("show")}

else {entry.target.classList.remove("show")}

})
})

const itens = document.querySelectorAll(".hidden")

itens.forEach( (itens) => myObserver.observe(itens))








/* SCRIPT PARA SELEÇÃO DAS IMAGENS */

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


  const zoom = document.getElementById('zoom');
const zoomImg = document.getElementById('zoom-img');

document.querySelectorAll('.project-img').forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
    zoomImg.src = img.src;
    zoom.style.display = 'flex';
  });
});

zoom.addEventListener('click', () => {
  zoom.style.display = 'none';
});



/* SCRIPT PARA SELECIONAR OS ARQUIVOS E MOSTRAR NA TELA PARTE ORCAMENTO */


 document.getElementById('file').addEventListener('change', function() {
    const fileName = this.files[0]?.name || 'Nenhum arquivo selecionado';
    document.getElementById('file-name').innerText = fileName;
  });



