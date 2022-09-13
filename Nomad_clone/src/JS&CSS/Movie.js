import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../style.css"

function Movie({slug, coverIMG, title, summary, genres}){
    return(
        <div className="movie" >
            <img className="movieImg" src={coverIMG} alt={title}/>
            <div className="movieData">
                <h2 className="movieTitle">
                    <Link to={`movies/${slug}`}>{title}</Link>
                </h2>
                <p className="movieSummary">{summary.slice(0,120)}...</p>
                <ul className="movieGenres">
                    {genres && genres.map((g)=> (
                        <li key={g}>{g}</li>
                        ))}
                </ul>
            </div>
        </div>)
}

Movie.propTypes = {
    slug : PropTypes.string.isRequired,
    coverIMG : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;