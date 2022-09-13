import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinChange from "./JS&CSS/CoinChange";
import MovieDetail from "./JS&CSS/MovieDetail";
import Movielist from "./JS&CSS/Movielist";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Movielist />} />
                <Route path="/coin" element={<CoinChange />} />
                <Route path="/movies/:slug" element={<MovieDetail />} />
            </Routes>
        </Router>
    )
}

export default App;