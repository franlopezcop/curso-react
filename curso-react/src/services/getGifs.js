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

export default function getGifs({keyword='morty'}={}, limit=25){
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`
    
    return fetch(URL)
    .then(response => response.json())
    .then(fromApiResponseToGifs)
}