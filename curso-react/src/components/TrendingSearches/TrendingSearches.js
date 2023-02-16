import React, { useState, useEffect } from 'react'
import getTrendingSearches from '../../services/getTrendingSearches'
import Category from 'components/Category'

export default function TrendingSearches () {
  const [trends, setTrends] = useState([])

  useEffect(function () {
    const controller = new AbortController()
    getTrendingSearches({signal: controller.signal})
      .then(setTrends)
      .catch(err => {})
  
    return () => controller.abort()
  }, [])

  return <Category name='Tendencias' options={trends} />
}