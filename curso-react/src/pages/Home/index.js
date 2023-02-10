import React, { useState } from "react";
import { Link, useLocation } from 'wouter';

export default function Home () {
    const [keyword, setKeyword] = useState('')
    const [path, setLocation] = useLocation()
    const handleSubmit = (e) =>{
        e.preventDefault();
        setLocation(`/search/${keyword}`)
    }
    const handleChange = (e) =>{
        setKeyword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Busca tu gif' value={keyword} onChange={handleChange}/>
                <input type='submit'></input>
            </form>
            <h3>Los Gifs mas populares</h3>
            <ul>
                <li><Link to='/search/pandas'>Pandas</Link></li>
                <li><Link to='/search/leones'>Leones</Link></li>
                <li><Link to='/search/tigres'>Tigres</Link></li>
            </ul>
        </div>
    )
}