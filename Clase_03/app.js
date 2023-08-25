const btn = document.querySelector('#btn-ver');
const cantidad = document.querySelector('#cantidad');
const lista = document.querySelector('#redes-list');

btn.addEventListener('click', function(){
    cantidad.innerText = redes.length;
    lista.innerHTML = '';

    redes.forEach( red => {
        lista.innerHTML += // html
        `<div class="card col-lg-2 col-md-3 col-sm-4 m-3 p-2">
            <div class="card-body">
                <h4 class="card-title text-center">${red.name}</h4>
                <img src="${red.imgURL}" alt="${red.name}" class="img-fluid">
                <a href="${red.url}" class="btn btn-success col-md-12 mt-3" target="_blank">Ir a</a>
            </div>
        </div>`
    })
})