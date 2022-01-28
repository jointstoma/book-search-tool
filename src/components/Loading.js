import './Loading.scss'
import {useSelector} from "react-redux"
import {useEffect} from "react"

const Loading = () => {
    let loading = useSelector((state) => state?.loadingReduce.loading)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            {
                loading ?
                    <article className='loadingContainer'>
                        <section className='loader'>
                            {new Array(5).fill('dot').map((item, index) =>
                            <p key={index} className='loaderDot'/>
                            )}
                        </section>
                        <h3 className='loaderText'/>
                    </article> : <></>
            }
        </>
    )
}
export default Loading