const apiKey = 'NNmyS9AHnx2kusjaFfYl0CY1VTUYeh0d'

const fromApiResponseToGifs = apiResponse =>{
    const {data = []} = apiResponse;
    if (Array.isArray(data)){
        const gifs = data.map(gif => {
            const { title, id } = gif
            const { url } = gif.images.downsized_medium
            return { title, url, id } 
        })
        return gifs
    }
    return []
}

export default function getTrendingSearches({limit=10}){
    const URL = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}`

    return fetch(URL)
    .then(response => response.json())
    .then(fromApiResponseToGifs)
}