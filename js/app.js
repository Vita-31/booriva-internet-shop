//open search
const searchHeader = document.getElementById('header-search');

document.addEventListener('click', (e) => {
    const searchBlock = e.target.closest('.action-search');
    const closeSearch = e.target.closest('.action-form__close');
    const searchForm = e.target.closest('.action-form');

    if(searchForm || searchBlock) {
        searchHeader.classList.add('search-open')
    } else {
        searchHeader.classList.remove('search-open')
    }

    if(closeSearch) {
        searchHeader.classList.remove('search-open')
    }
}) 