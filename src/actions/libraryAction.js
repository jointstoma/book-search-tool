import api from "../helper/api"
import {FETCH_BOOKS, HIDE_LOADING, SHOW_LOADING, SORT_ITEMS, page} from "../helper/constant"

export const fetchAllBooks = (searchedValue, sortOption) => async dispatch => {
    //****process/cleaning searchedValue****
    searchedValue = searchedValue.trim().toLowerCase().split(' ').join('+')
    //****fetch data****
    dispatch({type: SHOW_LOADING})
    try {
        const res = await api.get(`/search.json?q=${searchedValue}&page=${page}`)
        let searchedBooks = []
        if (!!res.data.numFound) {
            console.log('data', res.data)
            searchedBooks = res.data.docs.map(book => (
                {
                    title: book.title,
                    author: book.author_name,
                    isbn: book.isbn,
                    published_date: book['publish_date']
                }
            ))
            // ****filter out books without isbn or published date****
            searchedBooks = searchedBooks.filter(book => !!book.isbn && !!book.published_date)
        }
        dispatch({
            type: FETCH_BOOKS,
            payload: searchedBooks,
            sortOption,
            searchedValue,
        })
        dispatch({type: HIDE_LOADING})
    } catch (e) {
        dispatch({type: HIDE_LOADING})
        alert(
            `Sorry, the server is busy, please try it later. Error code: ${e}`
        )
    }
}

export const sortItems = (sortOption) => dispatch => {
    dispatch({
        type: SORT_ITEMS,
        payload: sortOption
    })
}