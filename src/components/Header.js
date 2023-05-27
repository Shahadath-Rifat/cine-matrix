import React from "react"

import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><span className="heading">CineMatrix</span></Link>
                <div className="headerRight">
                    <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                    <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                    <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                    <Link to="/AddMovies" style={{ textDecoration: "none" }}><span>Request Movies</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Header