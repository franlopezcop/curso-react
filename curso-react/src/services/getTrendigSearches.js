const apiKey = 'NNmyS9AHnx2kusjaFfYl0CY1VTUYeh0d'

const fromApiResponseToGifs = apiResponse =>{
    const {data = []} = apiResponse;
    return data
}

export default function getTrendingSearches(){
    const URL = `https://api.giphy.com/v1/trending/searches?api_key=${apiKey}`
    
    return fetch(URL)
    .then(response => response.json())
    .then(fromApiResponseToGifs)
}