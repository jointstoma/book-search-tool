import {useDispatch, useSelector} from "react-redux"
import {useForm} from "react-hook-form"
import {fetchAllBooks} from "../actions/libraryAction"
import './SearchForm.scss'

const SearchForm = () => {
    const sortOption = useSelector(state => state?.libraryReduce?.sort)
    const dispatch = useDispatch()
    const onSubmit = data => {
        fetchAllBooks(data?.bookName, sortOption)(dispatch)
    }
    const {register, handleSubmit, formState: {}} = useForm()
    return (
        <form className='formContainer' aria-label="search a book" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='searchBook'>Search Book:</label>
            <input id='searchBook' type="search"
                   aria-label='search book' aria-required='true'
                   placeholder='Search...' {...register('bookName', {required: true})}/>
            <button type='submit'  aria-label='search'>Go</button>
        </form>
    )
}

export default SearchForm