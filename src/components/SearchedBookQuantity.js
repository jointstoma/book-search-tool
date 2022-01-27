import {useSelector} from "react-redux"
import './SearchedBookQuantity.scss'
const SearchedBookQuantity = () => {
    const quantity = useSelector(state => state?.libraryReduce?.sortedBookList).length
    let searchedValue = useSelector(state => state?.libraryReduce?.searchedValue)
    let searchedValue2 = searchedValue.split('+').join(' ')

    if(!!searchedValue){
        return(
            <p tabIndex="0" className='display'>
                {`${quantity} Hits for: `}<strong>{searchedValue2}</strong>
            </p>
        )
    } else {
        return <></>
    }
}
export default SearchedBookQuantity