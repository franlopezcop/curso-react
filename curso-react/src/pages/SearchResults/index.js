import React from 'react';
import ListOfGifs from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs.js';

export default function SearchResults ({params}){
    const { keyword }  = params;
    const gifs = useGifs({keyword})
    
    return <>
        <h3>{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs}/>
    </>
}