

document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.lupa');
    const searchBar = document.querySelector('.barraDePesquisa');

    searchIcon.addEventListener('click', function() {
        searchBar.classList.toggle('show');
    });
});