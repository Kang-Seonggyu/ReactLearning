// import { useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetail () {
    /* // 제대로 써먹을 url 을 못찾음.
    const moiveSlug = useParams();

    useEffect(() => 
        fetch(`https://yts.mx/movies/${moiveSlug}`)
    , [])
    */
    const moiveSlug = useParams();
    console.log(moiveSlug)

    return <h1>Detail</h1>   
}

export default MovieDetail;