import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='Header'>
        <div className='HeaderLeft'>
            <Link to="/"><img className='Header__Icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png'/></Link>
            <Link to="/movies/popular" style={{textDecoration: 'none'}}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration: 'none'}}><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration: 'none'}}><span>UpComing</span></Link>
        </div>
    </div>
  )
}

export default Header