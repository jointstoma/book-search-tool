import {useSelector} from "react-redux"
import SearchedBookItem from "./SearchedBookItem"
import './SearchedBookList.scss'

const SearchedBookList = () => {
    let sortedBookList = useSelector(state => state?.libraryReduce?.sortedBookList)
    return(
        <div className = 'bookList'>
                {
                    sortedBookList.map((book, index) =>
                        <SearchedBookItem book={book} key={index}/>)
                }
        </div>
    )
}
export default SearchedBookList