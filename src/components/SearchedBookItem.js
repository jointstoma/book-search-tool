import './SearchedBookItem.scss'
import {cover_base_url, backup_cover_url} from "../helper/constant";

const SearchedBookItem = ({book}) => {
    return (
        <section tabIndex="0" className='bookContainer'>
            <img className='bookCover'
                 src={`${cover_base_url}${book.isbn[0]}-M.jpg`}
                 alt={book.title}
                 onError={({currentTarget}) => {
                     currentTarget.onerror = null; // prevents looping
                     currentTarget.src = backup_cover_url
                 }}
            />
            <section className= 'des'>
                <p tabIndex="0" className='title'>{book.title.slice(0, 50)}</p>
                <p tabIndex="0" className='author'>{book.author}</p>
                <p tabIndex="0" className='publishedDate'>{book.published_date[0]}</p>
            </section>
        </section>
    )
}
export default SearchedBookItem