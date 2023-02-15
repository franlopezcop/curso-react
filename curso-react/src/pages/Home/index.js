import React, { useState } from "react";
import { useLocation } from 'wouter';
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from '../../hooks/useGifs'
import TrendingSearches from "../../components/TrendingSearches";

export default function Home () {
    const [keyword, setKeyword] = useState('')
    const [path, setLocation] = useLocation()
    const lastGif = useGifs()

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
            <h3>Ultima Busqueda</h3>
            <ListOfGifs gifs={lastGif} />
            <TrendingSearches />
        </div>
    )
}