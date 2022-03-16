const iconProfissional = document.getElementById('icon-profissional')
const iconFree = document.getElementById('icon-free');
const iconBasico = document.getElementById('icon-basico');

iconProfissional.addEventListener('click', function() {
    document.querySelector('#card-item-profissional').classList.toggle('show-card');
    document.querySelector('#btn-profissional').classList.toggle('show-card');
})

iconFree.addEventListener('click', function() {
    document.querySelector('#card-item-free').classList.toggle('show-card');
    document.querySelector('#btn-free').classList.toggle('show-card');
})

iconBasico.addEventListener('click', function() {
    document.querySelector('#card-item-basico').classList.toggle('show-card');
    document.querySelector('#btn-basico').classList.toggle('show-card');
})