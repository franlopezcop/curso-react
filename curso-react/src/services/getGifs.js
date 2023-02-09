const apiKey = 'NNmyS9AHnx2kusjaFfYl0CY1VTUYeh0d'


export default function getGifs({keyword='morty'}={}){
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
    return fetch(URL)
    .then(response => response.json())
    .then(response =>{
        const {data} = response
        const gifs = data.map(gif => {
            const { title, id } = gif
            const { url } = gif.images.downsized_medium
            return { title, url, id } 
        })
        return gifs
    })
}