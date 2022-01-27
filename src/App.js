import './App.scss'
import SearchForm from "./components/SearchForm";
import SearchedBookList from "./components/SearchedBookList";
import SortBooks from "./components/SortBooks";
import Loading from "./components/Loading";
import {useSelector} from "react-redux";
import SearchedBookQuantity from "./components/SearchedBookQuantity";

function App() {
    const loading = useSelector(state => state?.loadingReduce?.loading)
    return (
        <article className="App">
            <header tabIndex="0">
                <h1>
                    My Library
                </h1>
            </header>
            <hr/>
            <main>
                <SearchForm/>
                <SortBooks/>
                {loading ? <Loading/> : <>
                    <SearchedBookQuantity/>
                    <SearchedBookList/>
                </>}
            </main>

        </article>
    )
}

export default App
