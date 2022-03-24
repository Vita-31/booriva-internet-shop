//open search
const searchHeader = document.getElementById('header-search');

if(searchHeader) {
    const searchForm = searchHeader.querySelector('.action-form')
    searchHeader.addEventListener('click', (e) => {
        const searchBlock = e.target.closest('.action-search');
        const closeSearch = e.target.closest('.action-form__close');
        
        if(searchBlock) {
            searchHeader.classList.add('search-open')
        }

        if(closeSearch) {
            searchHeader.classList.remove('search-open')
        }
    })
}