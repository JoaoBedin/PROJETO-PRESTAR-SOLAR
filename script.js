

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


 document.getElementById('file').addEventListener('change', function() {
    const fileName = this.files[0]?.name || 'Nenhum arquivo selecionado';
    document.getElementById('file-name').innerText = fileName;
  });
