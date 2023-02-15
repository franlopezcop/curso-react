import React, { useState, useEffect} from 'react';
import getTrendingSearches from '../../services/getTrendigSearches';
import Category from '../../components/Category';
import useNearScreen from '../../hooks/useNearScreen'

function TrendingSearches(){
    const [trends, setTrends] = useState([])

    useEffect(()=>{
        getTrendingSearches().then(setTrends)
    },[])

    return <Category name='Tendencias' options={trends} />
}

export default function LazyTrending (){
    const {isNearScreen, fromRef} = useNearScreen({distance: '200px'})

    return <div ref={fromRef}>
        {isNearScreen ? <TrendingSearches /> : null}
    </div>
}
