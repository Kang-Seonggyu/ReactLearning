import { useEffect, useState } from "react"

function Movielist () {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const getMovies = async() => {
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
        const json = await response.json();

        // const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();

        setMovies(json.data.movies);
        setLoading(false);        
    }
    useEffect(()=> {
        getMovies()
    }, [])
    console.log(movies)
        return (<div>  
                    {loading ? 
                    // 로딩 중일 때
                    <h1>Loading...</h1> 
                    // 로딩 아닐 때
                    :   <div>{movies.map(movie => 
                            <div key={movie.id} style={{display : "inline-block"}}>
                                <img src={movie.medium_cover_image} />
                                <h2>{movie.title}</h2>
                                <p>{movie.summary}</p>
                                <ul>
                                    {movie.genres.map((g)=> (
                                        <li key={g}>{g}</li>
                                    ))}
                                </ul>
                            </div>)}
                        </div>}  
                        
                </div>)
}

export default Movielist ;