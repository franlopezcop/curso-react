import React from 'react';
import Gif from '../Gif'

export default function ListOfGifs({gifs}) { 
    return (
        <div>
            {
            gifs.gifs.map(({id, title, url})=> 
                <Gif 
                    key={id}
                    id={id}
                    title={title}
                    url={url}
                />
            )
            }
        </div>
    )
}