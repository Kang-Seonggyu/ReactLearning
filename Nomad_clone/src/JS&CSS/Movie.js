import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({slug, coverIMG, title, summary, genres}){
    return(
        <div style={{display : "inline-block"}} >
            <img src={coverIMG} alt={title}/>
            <h2>
                <Link to={`movies/${slug}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres && genres.map((g)=> (
                    <li key={g}>{g}</li>
                ))}
            </ul>
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