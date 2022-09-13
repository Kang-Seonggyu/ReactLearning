import { useEffect, useState } from "react"
import Movie from "./Movie"

function Movielist () {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const getMovies = async() => {
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=year`)
        const json = await response.json();

        // 아래는 위의 2 문장을 한번에 작성. 
        // 평점과 연도 조절 가능.
        //const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();

        setMovies(json.data.movies);
        setLoading(false);        
    }
    useEffect(()=> {
        getMovies()
    }, [])
    
    //영화 목록 확인.
    console.log(movies)
    
    return (<div className="movieContainer">  
                {loading ? 
                // 로딩 중일 때
                <h1 className="loading">Loading...</h1> 
                // 로딩 아닐 때
                :   <div className="movies"> 
                        { movies && movies.map((movie) => (
                          <Movie 
                            className ="movies"
                            key = {movie.id}
                            slug = {movie.slug}
                            coverIMG={movie.medium_cover_image}
                            title={movie.title} 
                            summary={movie.summary} 
                            genres={movie.genres} 
                          /> 
                        ))} 
                    </div>
                    }  
                    
            </div>)
}

export default Movielist ;