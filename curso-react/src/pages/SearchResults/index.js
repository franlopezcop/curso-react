import React, {useState, useEffect} from 'react';
import getGifs from '../../services/getGifs.js';
import ListOfGifs from '../../components/ListOfGifs'

export default function SearchResults ({params}){
    const { keyword }  = params;
    const [gifs, setGifs] = useState([])
    
    useEffect(function () {
        getGifs({keyword}).then(gifs => setGifs(gifs));
    },[keyword])
    
    return <ListOfGifs gifs={gifs}/>
}