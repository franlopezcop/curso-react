import React from 'react';

export default function Gif({url, title}){
    return (
        <div>
            <h3>{title}</h3>
            <img src={url} alt={title} />
        </div>
    )
}