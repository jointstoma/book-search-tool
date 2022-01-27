import {BY_DATE, BY_TITLE, FETCH_BOOKS, SORT_ITEMS} from "../helper/constant";

const initState = {
    searchedBookList: [],
    sort: 'bestMatch',
    sortedBookList: [],
    searchedValue: ''
}

export const libraryReduce = (state = initState, action) => {
    const {type, sortOption, searchedValue, payload} = action
    switch (type) {
        case FETCH_BOOKS:
            let temp = []
            switch (sortOption) {
                case BY_TITLE:
                    temp = [...payload].sort(
                        (a, b) => {
                            if (a.title < b.title) {
                                return -1
                            }
                            if (a.title > b.title) {
                                return 1
                            }
                            return 0
                        }
                    )
                    break
                case BY_DATE:
                    temp = [...payload].sort(
                        (a, b) => (new Date(b.published_date[0]) - new Date(a.published_date[0]))
                    )
                    break
                default:
                    temp = [...payload]
            }
            return {
                ...state,
                searchedBookList: payload,
                sortedBookList: temp,
                searchedValue
            }
        case SORT_ITEMS:
            switch (payload) {
                case BY_TITLE:
                    return {
                        ...state,
                        sort: payload,
                        sortedBookList: [...state.searchedBookList].sort(
                            (a, b) => {
                                if (a.title < b.title) {
                                    return -1
                                }
                                if (a.title > b.title) {
                                    return 1
                                }
                                return 0
                            }
                        )
                    }
                case BY_DATE:
                    return {
                        ...state,
                        sort: payload,
                        sortedBookList: [...state.searchedBookList].sort(
                            (a, b) => (new Date(b.published_date[0]) - new Date(a.published_date[0]))
                        )
                    }
                default:
                    return {
                        ...state,
                        sort: payload,
                        sortedBookList: [...state.searchedBookList]
                    }
            }
        default:
            return state
    }
}