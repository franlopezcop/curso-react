import React from 'react';
import { Link } from 'wouter'

export default function Gif({url, title, id}){
    return (
        <Link to={`/gif/${id}`}>
            <div>
                <h3>{title}</h3>
                <img src={url} alt={title} />
            </div>
        </Link>
    )
}